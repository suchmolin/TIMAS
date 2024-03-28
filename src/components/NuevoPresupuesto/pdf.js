export default function htmlPDF(datos, extra, subtotal, itemsTable) {
  const dif = 5 - itemsTable.length;
  const iva = ((subtotal * extra.iva) / 100).toFixed(2);
  const total = (Number.parseFloat(subtotal) + Number.parseFloat(iva)).toFixed(
    2
  );
  return `
  <body style="border: solid 1px black">
    <img
      width="612px"
      height="770px"
      src=".././../../public/img/fondoPresupuesto.jpg"
      alt=""
    />
    <div class="pagina">
      <div class="correlativos">
        <p style="font-weight:bold;">Correlativo Seg. <span style="color: red; font-weight:normal;">${
          datos.coSeg
        }</span></p>
        <p style="font-weight:bold;">Presupuesto Nro. <span style="font-weight:normal;">${
          datos.numPre
        }</span></p>
      </div>
      <table class="datos">
        <tbody>
          <tr>
            <td style="font-weight: bold; width: 65px">FECHA</td>
            <td style="width: 200px">${datos.date}</td>
            <td style="font-weight: bold">REPRESENTANTE</td>
            <td>${datos.representante}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">CLIENTE</td>
            <td>${datos.cliente}</td>
            <td style="font-weight: bold">RIF</td>
            <td>${datos.rifRep}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">RIF</td>
            <td>${datos.rifCliente}</td>
            <td style="font-weight: bold">CORREO</td>
            <td>${datos.correo}</td>
          </tr>
          <tr>
            <td style="font-weight: bold">Titulo</td>
            <td>${datos.titulo}</td>
            <td style="font-weight: bold">TELEFONO</td>
            <td>${datos.telefono}</td>
          </tr>
        </tbody>
      </table>
  
      <table class="items">
        <thead>
          <tr>
            <td style="width: 25px;">ITEM</td>
            <td style="width: 80px;">PRODUCTO</td>
            <td style="width: 280px;">DESCRIPCION</td>
            <td style="width: 25px;">CANT</td>
            <td style="width: 50px;">PRECIO</td>
            <td style="width: 50px;">TOTAL</td>
          </tr>
        </thead>
        <tbody>
            ${itemsTable.map((item, i) => {
              return `
              <tr >
                <td>${i + 1}</td>
                <td>${item.producto}</td>
                <td>${item.desc}</td>
                <td>${item.cant}</td>
                <td>${item.punit}</td>
                <td>${item.cant * item.punit}</td>
              </tr>
              `;
            })}
            ${
              dif > 0
                ? `
                <tr>
                  <td style="height: 8px;"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                
                `.repeat(dif)
                : ``
            }
          
          
          <tr style="border: 0">
            <td colspan="4" rowspan="3" style="border: 0">
              OBSERVACION: ${extra.descripcion}
            </td>
            <td>SUBTOTAL:</td>
            <td>${subtotal}</td>
          </tr>
          <tr style="border: 0">
            <td>Iva ${extra.iva}%:</td>
            <td>${iva}</td>
          </tr>
          <tr style="border-top: 0; border-left: 0;">
            <td>Total</td>
            <td>${total}</td>
          </tr>
          <tr style="border: 0">
            <td style="border: 0" colspan="2">Localidad:</td>
            <td style="border: 0">${extra.localidad}</td>
            <td style="border: 0">Prioridad:</td>
            <td style="border: 0">${extra.prioridad}</td>
          </tr>
          <tr style="border: 0">
            <td style="border: 0" colspan="2">Tiempo de Entrega:</td>
            <td style="border: 0">${extra.tiempo}</td>
            <td style="border: 0">Forma de pago:</td>
            <td style="border: 0">${extra.formaPago}</td>
          </tr>
          <tr style="border: 0">
            <td style="border: 0" colspan="2">Validez:</td>
            <td style="border: 0">${extra.validez}</td>
          </tr>
          <tr style="height: 80px"></tr>
          <tr>
            <td colspan="6" style="text-align: center; background-color: #e8edea">
              Att: ${datos.representante}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <style>
      .pagina {
        position: absolute;
        top: 100px;
        left: 0;
        max-width: 612px;
        max-height: 770px;
        font-family: arial;
      }
      .correlativos {
        width: 612px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;
        font-size: 10px;
      }
      .correlativos p {
        padding-right: 30px;
        margin: 3px 0px;
      }
      .datos {
        margin-top: 20px;
        margin-left: 20px;
        font-size: 8px;
      }
  
      .items {
        margin-top: 20px;
        margin-left: 20px;
        font-size: 8px;
      }
  
      .items,
      .items tr,
      .items td {
        border: 1px solid black;
        border-collapse: collapse;
      }
      .items td {
        padding: 4px;
      }
    </style>
  </body>
  
  
  `;
}
