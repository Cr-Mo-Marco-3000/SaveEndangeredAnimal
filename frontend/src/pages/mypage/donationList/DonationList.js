import * as React from "react"
import { useState } from "react"
import { Pagination } from "@mui/material"
import usePagination from "components/pagination/Pagination"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import styles from "./DonationList.module.css"

export default function DonationList() {
  const allData = []
  for (let index = 0; index < 56; index++) {
    const newItem = {
      animalName: "원숭이",
      status: "판매 완료",
      price: 15,
      time: "2022-09-15",
    }
    allData.push(newItem)
  }

  const [page, setPage] = useState(1) // 처음 페이지는 1이다.
  const PER_PAGE = 10
  const count = Math.ceil(allData.length / PER_PAGE)
  const data = usePagination(allData, PER_PAGE)

  const handleChange = (e, p) => {
    setPage(p)
    data.jump(p)
  }

  return (
    <>
      <TableContainer className={styles.outDiv}>
        <Table
          sx={{ minWidth: 650, width: 800, margin: "auto" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ fontWeight: "bold" }}>
              <TableCell>기부 동물 이름</TableCell>
              <TableCell align="right">상태 코드</TableCell>
              <TableCell align="right">기부 금액</TableCell>
              <TableCell align="right">기부 시간</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.currentData().map((row, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.animalName}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          count={count}
          page={page}
          color="primary"
          size="large"
          sx={{ margin: 2 }}
          onChange={handleChange}
        />
      </TableContainer>
    </>
  )
}
