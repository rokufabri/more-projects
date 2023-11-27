import React from 'react'
import useFetchData from '../hooks/useFetchData.js'

const CardComments = () => {
  const { data } = useFetchData();

  return (
    <table className='table table-dark'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {data.map((em) => (
          <tr key={em.id}>
            <td>{em.id}</td>
            <td>{em.title}</td>
            <td>{em.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default CardComments