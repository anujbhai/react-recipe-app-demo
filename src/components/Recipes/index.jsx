import { useState } from 'react'
import RecipeItem from '../RecipeItem'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [description, setDescription] = useState('')

  const handleChangeTitle = (e) => {
    console.log('title:', e.target.value)
    setTitle(e.target.value)
  }

  const handleChangeIngredients = (e) => {
    console.log('ingredients:', e.target.value)
    setIngredients(e.target.value)
  }

  const handleChangeDescription = (e) => {
    console.log('desc:', e.target.value)
    setDescription(e.target.value)
  }

  const handleAddRecipe = (e) => {
    e.preventDefault()

    const newRecipe = {
      title,
      ingredients: ingredients.split(','),
      description,
    }

    setRecipes([...recipes, newRecipe])

    setTitle('')
    setIngredients('')
    setDescription('')
  }

  console.log('Recipe:', recipes)

  return (
    <>
      <div>
        <p><strong>Add Recipe</strong></p>
        <form>
          <div>
            <label htmlFor="recipe-title">Title</label>
            <input
              placeholder="Recipe title..."
              name='recipe-title'
              type="text"
              onChange={handleChangeTitle}
              value={title}
            />
          </div>

          <div>
            <label htmlFor="recipe-ingredients">Ingredients</label>
            <input
              placeholder="Recipe ingredients..."
              name='recipe-ingredients'
              type="text"
              onChange={handleChangeIngredients}
              value={ingredients}
            />
          </div>

          <div>
            <label htmlFor="recipe-description">Description</label>
            <textarea
              placeholder="Add a description ..."
              name="recipe-description"
              onChange={handleChangeDescription}
              value={description}
            ></textarea>
          </div>

          <button onClick={handleAddRecipe}>Add recipe</button>
        </form>
      </div>

      <hr />

      <div>
        <p>Recipes</p>

        {recipes.length > 0 && (<>
          <div>
            <input type="text" />
            <button>Search</button>

            <button>Sort</button>

            <button>Delete all recipes</button>
          </div>

          <hr />

          {recipes.map((recipe, index) => (
            <RecipeItem
              key={index}
              recipe={recipe}
              recipes={recipes}
              setRecipes={setRecipes}
            />
          ))}
        </>)}

        {!recipes.length && (<p>Add a recipe...</p>)}
      </div>
    </>
  )
}

export default Recipes
