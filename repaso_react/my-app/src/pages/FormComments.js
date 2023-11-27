import React, { useState } from 'react';
import userPostData from '../hooks/userPostData';

const FormComments = () => {
  const API_POST = "https://jsonplaceholder.typicode.com/posts";
  const { postData } = userPostData(API_POST); // Llamando al gancho

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtener los valores de los inputs
    const id = e.target.elements.id.value;
    const title = e.target.elements.title.value;
    const body = e.target.elements.body.value;

    // Crear un objeto con los datos
    const data = {
      Id: id,
      Title: title,
      Body: body,
    };

    try {
      // Enviar los datos mediante el gancho
      const result = await postData(data); // Solo necesitas pasar los datos, la URL ya está en el gancho
      console.log('Datos enviados con éxito:', result);
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };

  return (
    <form className='form-control' onSubmit={handleSubmit}>
      <label>Id: </label>
      <input name="id" required type='text' placeholder='Ingrese su Id' />
      <label>Title</label>
      <input name="title" required type='text' placeholder='Ingrese su titulo' />
      <label>Body: </label>
      <input name="body" required type='text' placeholder='Ingrese un cuerpo' />
      <button className='btn btn-primary' type="submit">Enviar Registro</button>
    </form>
  );
};

export default FormComments;
