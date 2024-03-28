import { useState, useEffect } from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import DatosPresupuesto from "../DatosPresupuesto";
import ItemsPresupuesto from "../ItemsPresupuesto";
import { jsPDF } from "jspdf";
import htmlPDF from "./pdf.js";
import appFirebase from "../../firebase/firebase.config.js";
import {
  query,
  getFirestore,
  collection,
  getDocs,
  where,
} from "firebase/firestore";
import { useAuth } from "../../context/AuthContext.jsx";

const NuevoPresupuesto = (props) => {
  const today = new Date();
  const fullyear = today.getFullYear();
  const month =
    today.getMonth() <= 9 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1;
  const date = today.getDate() <= 9 ? "0" + today.getDate() : today.getDate();
  const [handlerForm, setHandlerForm] = useState({
    date: `${fullyear}-${month}-${date}`,
    coSeg: "00923-0066",
    numPre: "001-0067",
    cliente: "",
    rifCliente: "",
    titulo: "",
    representante: "",
    rifRep: "",
    correo: "",
    telefono: "",
  });
  const [handlerExtra, setHandlerExtra] = useState({
    iva: 12,
    descripcion: "",
    localidad: "Caracas - Venezuela",
    tiempo: "",
    prioridad: "normal",
    formaPago: "efectivo",
    validez: "30 Días",
  });
  const [season, setSeason] = useState(0);
  const [errorInput, setErrorInput] = useState(false);
  const [itemsTable, setItemsTable] = useState([]);
  const [total, setTotal] = useState(0);
  const [datosRep, setDatosRep] = useState({});
  const { user } = useAuth();
  const userId = user.uid;

  useEffect(() => {
    setItemsTable([]);
    getRepData();
  }, []);

  useEffect(() => {
    setHandlerForm((prevState) => ({
      ...prevState,
      representante: datosRep.name,
      rifRep: datosRep.rif,
      correo: datosRep.email,
      telefono: datosRep.cellphone,
    }));
  }, [datosRep]);

  const getRepData = () => {
    const db = getFirestore(appFirebase);
    const q = query(collection(db, "datosRep"), where("user", "==", userId));
    getDocs(q)
      .then((response) => {
        response.forEach((item) => {
          setDatosRep(item.data());
        });
      })
      .catch((error) => console.log(error));
  };

  const checkFoward = () => {
    setErrorInput(false);
    if (season === 0) {
      for (let item in handlerForm) {
        if (handlerForm[item].trim() === "") {
          setErrorInput(true);
          return;
        }
      }
      setSeason(season + 1);
    }
  };

  const buildPDF = () => {
    const doc = new jsPDF("p", "pt", "letter");
    const margin = 0;
    const text = htmlPDF(handlerForm, handlerExtra, total, itemsTable);
    doc.html(text, {
      x: margin,
      y: margin,
      callback: function (doc) {
        doc.output("dataurlnewwindow", { filename: "prueba.pdf" });
      },
    });
  };

  return (
    <Grid item xs={12} md={7} lg={8} sx={{}}>
      <Box sx={{ marginLeft: "20px" }}>
        <Button variant="outlined" onClick={props.regresarMenu}>
          Salir
        </Button>

        {season === 0 && (
          <DatosPresupuesto
            handlerForm={handlerForm}
            setHandlerForm={setHandlerForm}
          />
        )}
        {season === 1 && (
          <ItemsPresupuesto
            handlerForm={handlerForm}
            itemsTable={itemsTable}
            setItemsTable={setItemsTable}
            total={total}
            setTotal={setTotal}
            handlerExtra={handlerExtra}
            setHandlerExtra={setHandlerExtra}
          />
        )}
      </Box>
      {errorInput && (
        <Typography
          variant="subtitle1"
          sx={{ color: "red", marginLeft: "20px", marginTop: "10px" }}
        >
          Todos los campos son Obligatorios
        </Typography>
      )}
      <Box
        sx={{
          margin: "20px 80px",
        }}
      >
        {season === 1 && (
          <>
            <Button
              onClick={() => setSeason(season - 1)}
              variant="outlined"
              sx={{ marginLeft: "20px" }}
            >
              {"<"} Atras
            </Button>
            <Button
              color="success"
              onClick={buildPDF}
              variant="contained"
              sx={{ marginLeft: "20px" }}
            >
              Generar PDF
            </Button>
          </>
        )}
        {season === 0 && (
          <Button
            onClick={checkFoward}
            variant="contained"
            sx={{ marginLeft: "20px" }}
          >
            Siguiente {">"}
          </Button>
        )}
      </Box>
    </Grid>
  );
};

export default NuevoPresupuesto;
