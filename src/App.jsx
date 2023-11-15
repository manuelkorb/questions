import { useState } from 'react'
import './App.css'
import './questions2'
import { Questions2 } from './questions2'
import Collapse from 'antd/es/collapse'



export function App() {

const items = [
  {
    key: '1',
    label: '¿Cómo puedo restablecer mi contraseña?',
    children: <p>Para restablecer tu contraseña, ve a la página de inicio de sesión y haz clic en el enlace '¿Olvidaste tu contraseña?'. Luego sigue las instrucciones para restablecerla.</p>,
  },
  {
    key: '2',
    label: '¿Cuál es la política de devolución de la tienda?',
    children: <p>Aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre y cuando los productos estén en su estado original y tengan las etiquetas intactas. Puedes consultar más detalles en nuestra página de política de devoluciones.</p>,
  },
  {
    key: '3',
    label: '¿Ofrecen envío internacional?',
    children: <p>Sí, ofrecemos envío internacional a varios países. Al realizar el pago, podrás seleccionar tu ubicación y ver las opciones de envío disponibles.</p>,
  },
  {
    key: '4',
    label: '¿Cómo puedo saber mi talla?',
    children: <p>Te recomendamos consultar nuestra guía de tallas en la página del producto para encontrar la talla adecuada. También puedes contactarnos si necesitas ayuda adicional para elegir la talla correcta.</p>,
  },
  {
    key: '5',
    label: '¿Puedo cambiar un artículo después de haber realizado la compra?',
    children: <p>Sí, tienes la opción de cambiar un artículo dentro de los 14 días posteriores a la compra. El artículo debe estar en condiciones originales y tener todas las etiquetas intactas. Comunícate con nuestro equipo de atención al cliente para coordinar el cambio.</p>,
  },
];

  return (
    <div className='container'>
      <h1 className='title'>Preguntas Frecuentes</h1>
      <Collapse items={items} defaultActiveKey={['1']} />
    </div>
  )
}


