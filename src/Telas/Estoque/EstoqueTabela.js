import React from 'react'
import { FormLabel, Input, InputLabel, TableBody } from "@mui/material";

const EstoqueTabela = () => {
  return (
      <TableBody>
        <TableRow>
          <TableHead>
            Alimento
          </TableHead>
          <TableHead>
            Preço
          </TableHead>
          <TableHead>
            Quantidade
          </TableHead>
        </TableRow>
      </TableBody>
  )
}

export default EstoqueTabela