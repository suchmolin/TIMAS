import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

export default function DatosPresupuesto(props) {
  const { handlerForm, setHandlerForm } = props;
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Shantell Sans",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        Nuevo Presupueto
      </Typography>
      <FormControl sx={{ marginTop: "5px", marginBottom: "5px" }}>
        <OutlinedInput
          required
          value={handlerForm.date}
          onChange={(e) =>
            setHandlerForm((prevState) => ({
              ...prevState,
              date: e.target.value,
            }))
          }
          size="small"
          id="fecha"
          type="date"
          label="fecha"
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: "5px", marginBottom: "5px" }}>
        <InputLabel size="small" htmlFor="numPresupuesto">
          Correlativo de Seg
        </InputLabel>
        <OutlinedInput
          required
          value={handlerForm.coSeg}
          onChange={(e) =>
            setHandlerForm((prevState) => ({
              ...prevState,
              coSeg: e.target.value,
            }))
          }
          size="small"
          id="correlativoSeg"
          type="text"
          label="Correlarivo de Seguridad"
          sx={{ maxWidth: "400px" }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: "5px", marginBottom: "5px" }}>
        <InputLabel size="small" htmlFor="numPresupuesto">
          Numero de presupuesto
        </InputLabel>
        <OutlinedInput
          required
          value={handlerForm.numPre}
          onChange={(e) =>
            setHandlerForm((prevState) => ({
              ...prevState,
              numPre: e.target.value,
            }))
          }
          size="small"
          id="numPresupuesto"
          type="text"
          label="Numero de presupuesto"
          sx={{ maxWidth: "400px" }}
        />
      </FormControl>

      <FormControl fullWidth sx={{ marginTop: "5px", marginBottom: "5px" }}>
        <InputLabel size="small" htmlFor="cliente">
          Cliente
        </InputLabel>
        <OutlinedInput
          required
          value={handlerForm.cliente}
          onChange={(e) =>
            setHandlerForm((prevState) => ({
              ...prevState,
              cliente: e.target.value,
            }))
          }
          size="small"
          id="cliente"
          type="text"
          label="cliente"
          sx={{ maxWidth: "400px" }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: "5px", marginBottom: "5px" }}>
        <InputLabel size="small" htmlFor="cedula">
          C.I./RIF
        </InputLabel>
        <OutlinedInput
          required
          value={handlerForm.rifCliente}
          onChange={(e) =>
            setHandlerForm((prevState) => ({
              ...prevState,
              rifCliente: e.target.value,
            }))
          }
          size="small"
          id="cedula"
          type="text"
          label="cedula"
          sx={{ maxWidth: "400px" }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: "5px", marginBottom: "5px" }}>
        <InputLabel size="small" htmlFor="titulo">
          Titulo
        </InputLabel>
        <OutlinedInput
          required
          value={handlerForm.titulo}
          onChange={(e) =>
            setHandlerForm((prevState) => ({
              ...prevState,
              titulo: e.target.value,
            }))
          }
          size="small"
          id="titulo"
          type="text"
          label="titulo"
          sx={{ maxWidth: "400px" }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: "5px", marginBottom: "5px" }}>
        <InputLabel size="small" htmlFor="representante">
          Representante
        </InputLabel>
        <OutlinedInput
          required
          value={handlerForm.representante}
          onChange={(e) =>
            setHandlerForm((prevState) => ({
              ...prevState,
              representante: e.target.value,
            }))
          }
          size="small"
          id="representante"
          type="text"
          label="representante"
          sx={{ maxWidth: "400px" }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: "5px", marginBottom: "5px" }}>
        <InputLabel size="small" htmlFor="rifRep">
          Rif Rep
        </InputLabel>
        <OutlinedInput
          required
          value={handlerForm.rifRep}
          onChange={(e) =>
            setHandlerForm((prevState) => ({
              ...prevState,
              rifRep: e.target.value,
            }))
          }
          size="small"
          id="rifRep"
          type="text"
          label="rifRep"
          sx={{ maxWidth: "400px" }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: "5px", marginBottom: "5px" }}>
        <InputLabel size="small" htmlFor="correo">
          Correo
        </InputLabel>
        <OutlinedInput
          required
          value={handlerForm.correo}
          onChange={(e) =>
            setHandlerForm((prevState) => ({
              ...prevState,
              correo: e.target.value,
            }))
          }
          size="small"
          id="correo"
          type="email"
          label="correo"
          sx={{ maxWidth: "400px" }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginTop: "5px", marginBottom: "5px" }}>
        <InputLabel size="small" htmlFor="telefono">
          Telefono
        </InputLabel>
        <OutlinedInput
          required
          value={handlerForm.telefono}
          onChange={(e) =>
            setHandlerForm((prevState) => ({
              ...prevState,
              telefono: e.target.value,
            }))
          }
          size="small"
          id="telefono"
          type="text"
          label="telefono"
          sx={{ maxWidth: "400px" }}
        />
      </FormControl>
    </>
  );
}
