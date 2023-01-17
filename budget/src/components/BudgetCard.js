import React from 'react'
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap';
import {currencyFormat} from '../utils'

function BudgetCard({name, amount, max, }) {

function getProgressBarVariant(amount, max){
  const ratio = amount/max
  if(ratio < 0.5) return 'success';
  if(ratio < 0.75) return 'warning';
  else return 'danger';
}

const backgroundColor=[]

if(amount>max){
  backgroundColor.push("bg-danger", "bg-opacity-10")
}else{
  backgroundColor.push("bg-light")
}

  return (
    <Card className={backgroundColor}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-end fw-normal mb-3'>
          <div className='me-2'>{name}</div>
          <div className='d-flex align-items-baseline'>{currencyFormat.format(amount)}
          <span className='text-muted fs-6 ms-1'>
            /{currencyFormat.format(max)}
          </span>
          </div>
        </Card.Title>
        <ProgressBar
          variant={getProgressBarVariant(amount,max)}
          min={0}
          max={max}
          now={amount}
          
        />
        <Stack direction='horizontal' gap={2} className="mt-4">
        <Button className='ms-auto' variant='primary'>sdasdkasd</Button>
        <Button variant='outline-secondary'>sdasdkasd</Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default BudgetCard;