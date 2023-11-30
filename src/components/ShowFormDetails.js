import React from 'react'

function ShowFormDetails({formData}) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{formData?.firstname}</td>
                    <td>{formData?.lastname}</td>
                    <td>{formData?.phone}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ShowFormDetails