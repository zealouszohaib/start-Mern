import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SideBar() {
  return (

    <div className="d-flex flex-column vh-100 p-3 bg-light shadow" style={{ width: '250px' }}>
      <div className="mb-4">
        <h5 className="text-center">
          <Link to={"/home"}>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgDAgH/xABHEAABAwMCAgQJBQwLAAAAAAAAAQIDBAURBhIHIRMxQVEIFCJhcXKBkaEVMqKx0RcjJTRCUlRikpOywRYkMzdDY4KDs8LS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8VURMryRAP0Grq9R2KhXbW3q20690tWxq/FTXya+0jGuHajtq+rUNd9QEkBGo+IGkJFw3UduT1p0T6zOpNU6erXbaS+2yZ35sdXG5fdkDbg+WPa9qOY5HNXqVFyin0AAAAAAAAAAAAAAAAAAAAAAYV4utDZLdLcLrUtpqSFMvkcirjsTknNVz2IVZqDjzaqZXRWG2z1zkXHTTu6KP0onNy+1GlpXy1U17tFXa61uaeqiWN+OtM9Sp50XCp50KJvTdA8OK19u+Qqm/XmJqb33DyYUymeSKmFT/SvrAYS8RuJGrJFjscMjGZ2ubbaPKIvne7crfeh+/cy4i3+Nz75W9ExFz+E7gr/bhu7Bqrxxe1ZcG9FR1MFrpkTDYaGJG4Ts8pcqnsVCGXC53C5yJJcq6qq3p1OqJnSL71UCyPuT2mmXZdtf2Skl7WI5rl+k9pJ4PB/oduZdQ1D89SspmtT+JShS9+BvERJWQaVvUv3xqbbfO9fnIn+Eq96fk+7uyHrJ4P9vVv3u/1TV73U7V/mhGajhLZkqZKWm4gWd9TG5WOglRjHNci4VFTpFXOeXUTzjNxETTdGtls834XqWeXIxfxWNe3P569nd192ebQLSbwm1zZ0dVWC4U8yr1Ot1c6Nzk7Oa7U+J+P1lxR0cqfK7at1Ozkvj9N0ka/7ic1/aK2oq6roJeloaqemk/PhkVi+9CY2XizrG1bWOuSV8KJhYq5iSo70u5O+kBYGnuPlNJsi1FaXwu5Is9G7e3Paux3NE9qqWtp3UNq1LQePWWrbUwI7Y5UarVa7uVFRFRSi7ffdDa9rYaC96Zltd0qX9HHVWrmjnL2q1E6897Xeku7R+m6PSdhgtNArnsjVXPleiI6RyrlXLj3ehEA3QAAAAAAAAAAAAAAAAAAEU19oO1a1okZWZgrYmqlPWRty5nmVPym57PcqErAHPWmeCtyZq9tLqRiPs8THS9PTv8AJqMKiIzPzmqucry6kXC9pddu0lpy2tRtDY7dDhMbkp2q5fS5UyvtU3QAqfwgrNAuioKulpoY3UtYxz1YxG+Q5HN7POrTnaN745GyRucx7VRWuauFRU7UU634pUCXHh7fYFTO2lWZPTGqP/6nIwHvW1dTX1ctXWzPnqJnK6SSRcucveql2eDfaYpaO93Cphjla6SKCPexFxtRXO6/WaUYdP8AAWgSj4d002FR1ZUSzuz62z6mIBL63TNhr27a2y26dP8AMpWKqe3BTPEDg3Uu1DSf0NpcUdW1yzMkkxHSuRU57l57VzyTmvJccuSX2AILw54aW3RkfjUj0rbs9uHVLm4SNF/JYnZ6etfMnInQAAAAAAAAAAAAAAAAAAAAAAAAAHlV07KulmppUzHNG6NyeZUwpxNVQSUtTLTzJtlierHp3Ki4U7eOROJ1B8m6/vtOnUtU6ZPMkmH4+kBFzsjRFCts0dZaN7dr4qKJHp3O2orviqnItjoflO9W+3/pVTHDy/WcifzO1ERGoiImETkiAfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc2+EPQeLa4hqmsw2ro2OV3e5quavwRp0kUt4StBvt9kuKJ/ZTSQOXv3Ijk/gX3gV1waofH+I1oarNzIXPnf+rtYqov7W06uOevBuoOl1JdLgqZbTUiRehXuRfqYp0KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvuO1ClZw6rJdu51JNFO3CZx5WxV9z1LBNPrCgW6aUvFC1Mvno5WM9bau344Arrwb6BItM3OvVmH1FYkecfOaxqKnxe74lukL4OUC2/hzZ2OTy5mOnd5971cn0VQmgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHX1gAYtroYbZbKS30yKkNLCyGPK89rURE+oygAAAAAAAAAAAAAAAAAAAAAAAAAAIff8AVl9tNxmpoNG11fTs5sqqedqtemO7GUXswvcaez8Srve6WGqtWh7jUU8yqkczahiMVUXC81TCc0XrAsgHhUSVEdDJLDTtlqWxq5sHSbUe7Hzdypy58s4IO7Xeo2qqLw+u/Lumav8AICfg0Glr5db107rlp2ptEceEYtTM1zpF7cNRMoid69/pxg6w1nLp272210llqLpVXBkjoo4JEavkJletO7K+wCWggbNb6le9rG8ProiuXCbqhiJ71TCE3ZJIlKkk0aMk2bnsa7cjVxzRFxz9OAPUGj0XqJmq9OUt5jpnUzahXokTn7lbterevHmN4ABE9Q6ovlouT6ak0hW3KnwisqaaduHcueUxlFRcmJb9Zaira2CmdoS5U7ZHo10007WsjTtcq46k6+/uAm4AAAAAAAAAAAAAAAAAA86j8Xl9RfqIPwO/uztXrT/8ryedfWfEUUcLEjhjZGxOprG4RAMe7rClqrFqpJ4oEhf0klPv6Rjcc1bs8rKdmOZR63LSeVxxa1UidmXVP/gvsxVt1Cqqq0dOqrzVVib9gEL4XVNmqPHltGqrzqCRu3pH17plZCnPCN3tRMrz8/Ix+K1Jp/x213K96oqrFU0zZGUzqNV6V27COVNqK7GOWU5cywoYYoGbIImRtznaxqImfYfE1HSzv3z00Mj8Y3PjRVx3cwOfrxd7DBa6qW1cUtT1NcyJywQvkqGpI/sRVVqY95delJpanQ9mnqJXyzS2uB8kkjlc57liRVVVXrVV7TZ/JtB+hU37pv2GQ1jWMRjWo1iJhGonJE7gKc4V8RdJ2DQ1vtt2uvQVkKyrJH4tK7GZHKnNrVTqVO0sbTWs7BqmWeOw1zqp0DUdL/V5WI1F6ubmonPC8vMptfk2g/Qqb9037D2hghp2q2CKONqrlUY1ETPsAquotVz1RxN1RQN1RerZTULKV0UVFVOazy4m58nOE58+Xeph6u0/dtILY62HWWoazxi709M+KorH7Fa7cq5TPP5uPaXC2KNsjpWxsSR+Nz0amXY71EsUUyNSWNj0au5Ec1FwveB9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="
              alt="Logo"
              style={{ width: '50px', marginRight: '8px' }}
            />
          </Link>
          Invoika
        </h5>
      </div>
      <Nav className="flex-column">
        <Nav.Link href="#" className="text-muted">
          <i className="bi bi-house"></i> Dashboard
        </Nav.Link>
        <hr />
        <p className="fw-bold text-muted">PAGES</p>
        <Nav.Link href="#" className="text-dark">
          <i className="bi bi-building"></i> Company
        </Nav.Link>
        <Nav.Link>
        <Link to="/new-invoice" className="">
          <i className="bi bi-file-earmark-text"></i> Generate Invoice
        </Link>

        </Nav.Link>
        <Nav.Link>
          <Link to={"/invoice-list"} className="text-dark">
            <i className="bi bi-file-earmark-text"></i> Invoices
          </Link>
        </Nav.Link>
        <Nav.Link href="#" className="text-dark">
          <i className="bi bi-wallet2"></i> Payments
        </Nav.Link>
        <Nav.Link href="#" className="text-dark">
          <i className="bi bi-calculator"></i> Tax/Charges
        </Nav.Link>
        <Nav.Link href="#" className="text-dark">
          <Link to={'/product'}>
          <i className="bi bi-bag"></i> Products
          </Link>
        </Nav.Link>
        <Nav.Link href="#" className="text-dark">
          <i className="bi bi-clipboard"></i> Reports
        </Nav.Link>
        <Nav.Link href="#" className="text-dark">
          <i className="bi bi-person"></i> Clients
        </Nav.Link>
        <Nav.Link href="#" className="text-dark">
          <i className="bi bi-people"></i> Accountants
        </Nav.Link>
      </Nav>
    </div>
  )
}

export default SideBar