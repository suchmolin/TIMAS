import { useState } from "react";
import {
  Typography,
  Box,
  FormControl,
  OutlinedInput,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function ItemsPresupuesto(props) {
  const {
    handlerForm,
    itemsTable,
    setItemsTable,
    total,
    setTotal,
    handlerExtra,
    setHandlerExtra,
  } = props;
  const initAdd = {
    producto: "",
    desc: "",
    cant: "",
    punit: "",
  };
  const [handleAdd, setHandleAdd] = useState(initAdd);
  const cellStyle = { padding: "5px 0px" };

  const checkAdd = () => {
    const array = [...itemsTable];
    array.push(handleAdd);
    setItemsTable(array);
    const prevTotal = handleAdd.cant * handleAdd.punit;
    setTotal(total + prevTotal);
    setHandleAdd(initAdd);
  };

  const removeItem = (position, totalUnit) => {
    const array = [...itemsTable];
    array.splice(position, 1);
    setItemsTable(array);
    setTotal(total - totalUnit);
  };

  return (
    <>
      <Box
        sx={{
          marginLeft: "20px",
          marginTop: "20px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
          <Typography sx={{ width: "50%" }}>
            Correlativo Seg: {handlerForm.coSeg}
          </Typography>
          <Typography sx={{ width: "50%" }}>
            Presupuesto Nro: {handlerForm.numPre}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Typography sx={{ width: "50%" }}>
            Fecha: {handlerForm.date}
          </Typography>
          <Typography sx={{ width: "50%" }}>
            Representante {handlerForm.representante}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Typography sx={{ width: "50%" }}>
            Cliente: {handlerForm.cliente}
          </Typography>
          <Typography sx={{ width: "50%" }}>
            RIF {handlerForm.rifRep}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Typography sx={{ width: "50%" }}>
            RIF: {handlerForm.rifCliente}
          </Typography>
          <Typography sx={{ width: "50%" }}>
            Correo: {handlerForm.correo}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Typography sx={{ width: "50%" }}>
            Titulo: {handlerForm.titulo}
          </Typography>
          <Typography sx={{ width: "50%" }}>
            Teléfono: {handlerForm.telefono}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FormControl>
          <OutlinedInput
            value={handleAdd.producto}
            onChange={(e) =>
              setHandleAdd((prevState) => ({
                ...prevState,
                producto: e.target.value,
              }))
            }
            placeholder="Producto"
            notched={false}
            size="small"
            type="text"
            label="Producto"
            sx={{ width: "150px", height: "35px", marginRight: "10px" }}
          />
        </FormControl>
        <FormControl>
          <OutlinedInput
            value={handleAdd.desc}
            onChange={(e) =>
              setHandleAdd((prevState) => ({
                ...prevState,
                desc: e.target.value,
              }))
            }
            placeholder="Descripción"
            notched={false}
            size="small"
            type="text"
            label="Descripcion"
            sx={{ width: "300px", height: "35px", marginRight: "10px" }}
          />
        </FormControl>
        <FormControl>
          <OutlinedInput
            value={handleAdd.cant}
            onChange={(e) =>
              setHandleAdd((prevState) => ({
                ...prevState,
                cant: e.target.value,
              }))
            }
            placeholder="Cant"
            notched={false}
            size="small"
            type="text"
            label="Descripcion"
            sx={{ width: "65px", height: "35px", marginRight: "10px" }}
          />
        </FormControl>
        <FormControl>
          <OutlinedInput
            value={handleAdd.punit}
            onChange={(e) =>
              setHandleAdd((prevState) => ({
                ...prevState,
                punit: e.target.value,
              }))
            }
            placeholder="0.00$"
            notched={false}
            size="small"
            type="text"
            label="Descripcion"
            sx={{ width: "80px", height: "35px", marginRight: "10px" }}
          />
        </FormControl>
        <Button onClick={checkAdd} variant="contained">
          <AddCircleIcon />
        </Button>
      </Box>
      {itemsTable.length > 0 && (
        <Box
          sx={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={cellStyle}>N°</TableCell>
                <TableCell sx={cellStyle}>Producto</TableCell>
                <TableCell sx={cellStyle}>Descripción</TableCell>
                <TableCell sx={cellStyle}>Cant.</TableCell>
                <TableCell sx={cellStyle}>P.Unitario</TableCell>
                <TableCell sx={cellStyle}>Total Unit</TableCell>
                <TableCell sx={cellStyle}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itemsTable.map((item, i) => {
                const totalUnit = item.cant * item.punit;

                return (
                  <TableRow key={i}>
                    <TableCell sx={cellStyle}>
                      <Typography sx={{ marginRight: "10px" }} variant="body1">
                        {i + 1}
                      </Typography>
                    </TableCell>
                    <TableCell sx={cellStyle}>{item.producto}</TableCell>
                    <TableCell sx={cellStyle}>{item.desc}</TableCell>
                    <TableCell sx={cellStyle}>{item.cant}</TableCell>
                    <TableCell sx={cellStyle}>{item.punit}</TableCell>
                    <TableCell sx={cellStyle}>{totalUnit}</TableCell>
                    <TableCell sx={cellStyle}>
                      <Button
                        size="small"
                        onClick={() => removeItem(i, totalUnit)}
                        color="error"
                        variant="outlined"
                      >
                        <RemoveCircleIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}

              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Total: {Number.parseFloat(total).toFixed(2)}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      )}
      <hr />
      <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <FormControl>
          <OutlinedInput
            value={handlerExtra.iva}
            notched={false}
            onChange={(e) =>
              setHandlerExtra((prevState) => ({
                ...prevState,
                iva: e.target.value,
              }))
            }
            size="small"
            type="text"
            label="iva"
            sx={{ width: "50px", height: "35px", marginRight: "10px" }}
          />
        </FormControl>
        <Typography variant="subtitle1" color="initial">
          % Iva
        </Typography>
      </Box>
      <Box sx={{ marginTop: "5px" }}>
        <FormControl fullWidth sx={{ marginTop: "5px", marginBottom: "5px" }}>
          <InputLabel size="small" htmlFor="descripcion">
            Descripcion
          </InputLabel>
          <OutlinedInput
            required
            value={handlerExtra.descripcion}
            onChange={(e) =>
              setHandlerExtra((prevState) => ({
                ...prevState,
                descripcion: e.target.value,
              }))
            }
            size="small"
            id="descripcion"
            type="text"
            label="descripcion"
            sx={{ maxWidth: "550px" }}
          />
        </FormControl>
      </Box>
      <Box sx={{ marginTop: "5px", display: " flex", gap: "20px" }}>
        <FormControl sx={{ marginTop: "5px", marginBottom: "5px" }}>
          <InputLabel size="small" htmlFor="localidad">
            Localidad
          </InputLabel>
          <OutlinedInput
            required
            value={handlerExtra.localidad}
            onChange={(e) =>
              setHandlerExtra((prevState) => ({
                ...prevState,
                localidad: e.target.value,
              }))
            }
            size="small"
            id="localidad"
            type="text"
            label="localidad"
            sx={{ maxWidth: "200px" }}
          />
        </FormControl>
        <FormControl sx={{ marginTop: "5px", marginBottom: "5px" }}>
          <InputLabel id="demo-simple-select-label">Prioridad</InputLabel>
          <Select
            sx={{ width: "200px" }}
            size="small"
            labelId="prioridad"
            id="prioridad"
            label="prioridad"
            value={handlerExtra.prioridad}
            onChange={(e) =>
              setHandlerExtra((prevState) => ({
                ...prevState,
                prioridad: e.target.value,
              }))
            }
          >
            <MenuItem default value="normal">
              Normal
            </MenuItem>
            <MenuItem value="Urgente">Urgente</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginTop: "5px", marginBottom: "5px" }}>
          <InputLabel id="labelFormaPago">Forma de pago</InputLabel>
          <Select
            sx={{ width: "200px" }}
            size="small"
            labelId="formaPago"
            id="formaPago"
            label="forma de pago"
            value={handlerExtra.formaPago}
            onChange={(e) =>
              setHandlerExtra((prevState) => ({
                ...prevState,
                formaPago: e.target.value,
              }))
            }
          >
            <MenuItem default value="efectivo">
              Efectivo
            </MenuItem>
            <MenuItem value="pagoMovil">Pago Movil</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ marginTop: "5px", display: " flex", gap: "20px" }}>
        <FormControl sx={{ marginTop: "5px", marginBottom: "5px" }}>
          <InputLabel size="small" htmlFor="tiempo">
            Tiempo de Entrega
          </InputLabel>
          <OutlinedInput
            required
            value={handlerExtra.tiempo}
            onChange={(e) =>
              setHandlerExtra((prevState) => ({
                ...prevState,
                tiempo: e.target.value,
              }))
            }
            size="small"
            id="tiempo"
            type="text"
            label="tiempo de entrega"
            sx={{ maxWidth: "200px" }}
          />
        </FormControl>
        <FormControl sx={{ marginTop: "5px", marginBottom: "5px" }}>
          <InputLabel size="small" htmlFor="validez">
            Validéz
          </InputLabel>
          <OutlinedInput
            required
            value={handlerExtra.validez}
            onChange={(e) =>
              setHandlerExtra((prevState) => ({
                ...prevState,
                validez: e.target.value,
              }))
            }
            size="small"
            id="validez"
            type="text"
            label="validez"
            sx={{ maxWidth: "200px" }}
          />
        </FormControl>
      </Box>
    </>
  );
}
