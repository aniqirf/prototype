import React from 'react'

const TableStatic = () => {

  const data = [
    { name: "Spire", id: "#12010", model: "Tesla Model X", serviceDate: "08/21/2018", trips: 774, energy: "450 kWh" },
    { name: "Eos", id: "#12011", model: "Volvo Intellisafe", serviceDate: "06/12/2018", trips: 825, energy: "321 kWh" },
    { name: "Eagle", id: "#12012", model: "BMW 7 Series", serviceDate: "06/16/2018", trips: 125, energy: "230 kWh" },
    { name: "Expedition", id: "#12013", model: "Infiniti Q50S", serviceDate: "07/02/2018", trips: 734, energy: "129 kWh" },
    { name: "Bliss", id: "#12014", model: "Audi RS 7", serviceDate: "08/27/2018", trips: 823, energy: "553 kWh" },
    { name: "Vigor", id: "#12015", model: "Tesla Model S", serviceDate: "10/02/2018", trips: 1142, energy: "650 kWh" },
    { name: "Scorpion", id: "#12016", model: "Tesla Model X", serviceDate: "05/29/2018", trips: 925, energy: "452 kWh" },
    { name: "Resolve", id: "#12017", model: "Volvo Intellisafe", serviceDate: "03/01/2018", trips: 624, energy: "640 kWh" },
  ];

  return (
    <>
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-gray-500 uppercase text-sm">
            <th className="py-3">Name and ID</th>
            <th className="py-3">Vehicle Model</th>
            <th className="py-3">Next Service</th>
            <th className="py-3">Trips</th>
            <th className="py-3">Energy Used</th>
            <th className="py-3">Manage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <tr key={index} className="border-b text-gray-700">
              <td className="py-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  {rowData.name.slice(0, 2)}
                </div>
                <div>
                  <div className="font-medium">{rowData.name}</div>
                  <div className="text-gray-500 text-sm">{rowData.id}</div>
                </div>
              </td>
              <td className="py-4">{rowData.model}</td>
              <td className="py-4">{rowData.serviceDate}</td>
              <td className="py-4">{rowData.trips}</td>
              <td className="py-4">{rowData.energy}</td>
              <td className="py-4 text-blue-500 cursor-pointer">Manage</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableStatic
