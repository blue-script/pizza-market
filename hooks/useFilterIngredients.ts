"use client"

import {Ingredient} from "@prisma/client"
import {useEffect, useState} from "react"
import {Api} from "@/services/api-client"

interface ReturnProps {
  ingredients: Ingredient[]
  loading: boolean
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true)
        const ingredients =  await Api.ingredients.getAll()
        setIngredients(ingredients)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchIngredients()
  }, [])

  return {ingredients, loading}
}