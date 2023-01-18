import React, {useContext, useState} from "react";
import {v4 as uuid4} from 'uuid'
const BudgetContext = React.createContext()

export function useBudgets(){
    return useContext(BudgetContext)
}

export const BudgetsProvider = ({children})=>{
    const [budgets, setBudget] = useState([])
    const [expenses, setExpenses] = useState([])

    function getBudgetExpenses(budgetId){
        return expenses.filter(expenses=>expenses.budgetId===budgetId)
    }
    function addExpenses({description, amount, budgetId}){
        setExpenses(prevExpenses=>{
            return[...prevExpenses, {description, amount, budgetId}]
        })
    }
    function addBudget({name, max}){
        setBudget(prevBudgets=>{
            if(prevBudgets.find(budget=>budget.name===name)){
                return prevBudgets
            }
            return[...prevBudgets, {id: uuid4(), name, max}]
        })
    }
    function deleteButget({id}){
        setBudget(prevBudgets=>{
            return prevBudgets.filter(budget=>budget.id!==id)

        })
    }
    function deleteExpense({id}){
        setExpenses(prevExpenses=>{
            return prevExpenses.filter(expenses=>expenses.id!==id)

        })
    }
    return <BudgetContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpenses,
        addBudget,
        deleteButget,
        deleteExpense
    }}>
        {children}
    </BudgetContext.Provider>
}