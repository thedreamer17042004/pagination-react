/**
 * https://codesandbox.io/s/pagination-j671b5?file=/src/App.js:2062-2075
 * TO PAGINATE A PAGE GUYS HAVE TO DO THE FOLLOWING BELOW THIS LINE
 * --------------------------------
 * page
 * total
 * perPage
 * currentPage
 * total_pages
 * => STATE
 * == filter pageNumbers
 * == filter singlePageNumber=>
 * == onClick singlePageNumber => function(isChangeContent);
 *
 * //get api map
 */
import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import "./styles.css";
const HomeTable = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerpage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState();
  const [data, setData] = useState([]);

  const getApi = async (page) => {
    let api = await fetch(`https://reqres.in/api/users?page=${page}`);
    api
      .json()
      .then(
        (value) => (
          setPage(page),
          setPerpage(value.per_page),
          setTotal(value.total),
          setCurrentPage(value.page),
          setData(value.data)
        )
      );
  };

  useEffect(() => {
    getApi();
  }, []);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  const handlePagination = (id) => {
    if (id !== len || id !== 0) {
      setCurrentPage(id);
      getApi(id);
    } else {
      setCurrentPage(currentPage);
    }
  };

  const redersPageNumbers = pageNumbers.map((id) => {
    return (
      <>
        <span key={id} onClick={() => handlePagination(id)}>
          {id}
        </span>
      </>
    );
  });
  let len = redersPageNumbers.length;

  const handleNextClick = (currentPage) => {
    if (currentPage <= redersPageNumbers.length) {
      setCurrentPage(currentPage);
      getApi(currentPage);
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 &&
            data.map((value) => {
              return (
                <>
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.email}</td>
                    <td>{value.first_name}</td>
                    <td>{value.last_name}</td>
                    <td style={{ height: 40, width: 30 }}>
                      <img src={value.avatar} height={50} width={50} alt="" />
                    </td>
                  </tr>
                  ;
                </>
              );
            })}
        </tbody>
      </Table>

      <div id="pagination">
        <span onClick={() => handleNextClick(currentPage - 1)}>&laquo;</span>
        {redersPageNumbers}
        <span onClick={() => handleNextClick(currentPage + 1, len)}>
          &raquo;
        </span>
      </div>
    </>
  );
};

export default HomeTable;
