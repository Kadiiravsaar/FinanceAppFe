import React from 'react'
import Card from '../card/Card'

interface Props  {}

const CardList:React.FC<Props> = (props: Props) => {
  return (
    <div>
        <Card companyName='Msft' price={1000}  ticker='Microsoft'/>
        <Card companyName='Appl' price={1000}  ticker='Apple'/>
        <Card companyName='Tsla' price={1000}  ticker='Tesla'/>
    </div>
  )
}

export default CardList