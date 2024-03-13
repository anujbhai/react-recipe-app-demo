import { useState } from "react"

const RecipeItem = props => {
  const {
    recipe,
    recipes,
    setRecipes
  } = props

  const [isEdit, setIsEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(recipe.title)
  const [editIngredients, setEditIngredients] = useState(recipe.ingredients.join(','))
  const [editDescription, setEditDescription] = useState(recipe.description)

  const handleEdit = () => {
    setIsEdit(!isEdit)

    if (!isEdit) {
      // reset edit fields on cancel edit
    }
  }

  const handleSaveEdit = () => {
    const updatedRecipe = {
      ...recipe,
      title: editTitle,
      ingredients: editIngredients.split(','),
      description: editDescription,
    }

    const updatedRecipes = recipes.map((item) => (item === recipe ? updatedRecipe : item))
    setRecipes(updatedRecipes)
    setIsEdit(false)
  }
  
  const handleDelete = () => {
    const filteredRecipes = recipes.filter((item) => item !== recipe)
    setRecipes(filteredRecipes)
  }

  return (
    <>
      <p><strong>{recipe.title}</strong></p>
      <div>
        {recipe.ingredients.map((item, index) => (<p key={index}>- {item}</p>))}
      </div>
      <p>{recipe.description}</p>

      {isEdit ? <button onClick={handleSaveEdit}></button> : <button onClick={handleEdit}>Edit</button>}
      <button onClick={handleDelete}>Delete</button>

      <hr />
    </>
  )
}

export default RecipeItem
