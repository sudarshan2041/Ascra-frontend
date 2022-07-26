import React, { useEffect, useState } from "react";
import AddForm from "./AddForm";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listAction } from "../../redux/actions/getListAction";
import { ListContainerStyle, Wrapper, Table, TH, TR, TD, Title } from "./style";

function ListContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { listData } = useSelector((state) => state.listReducer);

  const [clientList, setClientList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  console.log("CLIENT LIST", clientList);

  useEffect(() => {
    dispatch(listAction());
  }, []);

  useEffect(() => {
    if (listData && listData.clients.length > 0) {
      formatData(listData.clients);
    }
  }, [listData]);

  function formatData(data) {
    let arr = data.map((obj) => {
      return createData(obj.customer_name, obj.email, obj.mobile_no, obj.bank);
    });
    setClientList(arr);
  }

  function createData(name, email, mobile, bank) {
    return { name, email, mobile, bank };
  }

  function handleOpenForm() {
    setOpenForm(true);
  }

  function handleLogOut() {
    localStorage.removeItem("TOKEN_KEY");
    navigate("/login");
  }

  return (
    <>
      <ListContainerStyle>
        <Wrapper>
          <div>
            <Button
              sx={{ m: 1, width: "300px" }}
              variant="outlined"
              onClick={handleOpenForm}
            >
              ADD
            </Button>
            <Button
              sx={{ m: 1, width: "100px" }}
              variant="contained"
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          </div>
          <Title>CUSTOMER LIST</Title>
          <Table>
            <TR>
              <TH>Customer Name</TH>
              <TH>Contact No.</TH>
              <TH>Email Id.</TH>
              <TH>Bank Name</TH>
            </TR>
            {clientList.map((ele) => {
              return (
                <TR>
                  <TD>{ele.name}</TD>
                  <TD>{ele.mobile}</TD>
                  <TD>{ele.email}</TD>
                  <TD>{ele.bank}</TD>
                </TR>
              );
            })}
          </Table>
        </Wrapper>
      </ListContainerStyle>
      {openForm && <AddForm setOpenForm={setOpenForm} />}
    </>
  );
}

export default ListContainer;
