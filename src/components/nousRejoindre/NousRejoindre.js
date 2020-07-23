import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import './NousRejoindre.css'

// const NousRejoindre = () => (
//   <Form className="formulaire">
//     <Form.Field>
//       <label>Nom</label>
//       <input placeholder='Nom' />
//     </Form.Field>
//     <Form.Field>
//       <label>Prénom</label>
//       <input placeholder='Prénom' />
//     </Form.Field>
//     <Form.Field>
//       <label>Addresse à Pra Loup</label>
//       <input placeholder='Addresse à Pra Loup' />
//     </Form.Field>
//     <Form.Field>
//       <label>Addresse principale</label>
//       <input placeholder='Addresse principale' />
//     </Form.Field>
//     <Form.Field>
//       <label>Téléphone</label>
//       <input placeholder='Téléphone' />
//     </Form.Field>
//     <Form.Field>
//       <label>Email</label>
//       <input placeholder='Email' />
//     </Form.Field>
//     <Button type='submit'>Submit</Button>
//   </Form>
// )

// export default NousRejoindre

const NousRejoindre = () => {
  const [membre, setMembre] = useState([])
  const [inscription, setInscription] = useState({
    lastname: "",
    firstname: "",
    addressPraloup: "",
    address: "",
    tel: "",
    email: ""
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios.get(`http://localhost:4000/members`)
      .then(res => {
        setMembre(res.data)
      })
      .catch(err => console.log(err))
  }



  const addInscription = (e) => {
    e.preventDefault(e)
    axios.post(`http://localhost:4000/members`, inscription)
    // .then(fetchData())
  }

  return (
    <div>
      <div className="presNousRej">
        <p>Vous souhaitez adhérer à notre association?</p>
        <p>Nous vous proposons d'effectuer une pré-inscription en ligne.</p>
        <p>Afin de finaliser votre inscription, nous vous demandons de vous adresser un chèque d'un montant de 20 euros.</p>
      </div>
      {/* <form onSubmit={addInscription}>
        <label>Nom</label>
        <input className="lastname" required type='text' value={inscription.lastname} onChange={(e) => setInscription({ ...inscription, lastname: e.target.value })} placeholder='Nom' />
        <input name="firstname" required type='text' value={inscription.firstname} onChange={(e) => setInscription({ ...inscription, firstname: e.target.value })} placeholder='Prénom' />
        <input name="addressPraloup" required type='text' value={inscription.addressPraloup} onChange={(e) => setInscription({ ...inscription, addressPraloup: e.target.value })} placeholder='Adresse à Pra Loup' />
        <input name="address" type='text' value={inscription.address} onChange={(e) => setInscription({ ...inscription, address: e.target.value })} placeholder='Adresse principale' />
        <input name="tel" required type='text' value={inscription.tel} onChange={(e) => setInscription({ ...inscription, tel: e.target.value })} placeholder='Téléphone' />
        <input name="email" required type='text' value={inscription.email} onChange={(e) => setInscription({ ...inscription, email: e.target.value })} placeholder='Email' />
        <button className="btnValid" type="submit">Valider</button>
      </form> */}
      <Form onSubmit={addInscription} className="formulaire">
        <Form.Field className="champs">
          <label>Nom</label>
          <input className="lastname" required type='text' value={inscription.lastname} onChange={(e) => setInscription({ ...inscription, lastname: e.target.value })} placeholder='Nom' />
        </Form.Field>
        <Form.Field>
          <label>Prénom</label>
          <input name="firstname" required type='text' value={inscription.firstname} onChange={(e) => setInscription({ ...inscription, firstname: e.target.value })} placeholder='Prénom' />
        </Form.Field>
        <Form.Field>
          <label>Addresse à Pra Loup</label>
          <input name="addressPraloup" required type='text' value={inscription.addressPraloup} onChange={(e) => setInscription({ ...inscription, addressPraloup: e.target.value })} placeholder='Addresse à Pra Loup' />
        </Form.Field>
        <Form.Field>
          <label>Addresse principale</label>
          <input name="address" type='text' value={inscription.address} onChange={(e) => setInscription({ ...inscription, address: e.target.value })} placeholder='Addresse principale' />
        </Form.Field>
        <Form.Field>
          <label>Téléphone</label>
          <input name="tel" required type='text' value={inscription.tel} onChange={(e) => setInscription({ ...inscription, tel: e.target.value })} placeholder='Téléphone' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input name="email" required type='text' value={inscription.email} onChange={(e) => setInscription({ ...inscription, email: e.target.value })} placeholder='Email' />
        </Form.Field>
        <Button className="btnValid" type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default NousRejoindre
