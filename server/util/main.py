import json
import os

# Define the path to the directory containing your shaped recipe JSON files
shaped_recipe_dir = input("Enter path to shaped recipe files: ")

# Define the path to the directory containing your shapeless recipe JSON files
shapeless_recipe_dir = input("Enter path to shapeless recipe files: ")

# Initialize an empty list to store JavaScript code for both shaped and shapeless recipes
js_code_combined = []

# Create a JavaScript file with the RecipeBuilder class for both shaped and shapeless recipes
js_code_combined.append('''
/**
 * A class for building and managing recipes.
 */
class RecipeBuilder {
  // ... (The RecipeBuilder class as before)
}
''')

# Declare the builder variable once for both recipe types
js_code_combined.append('const builder = new RecipeBuilder();')

# Process shaped recipes
for filename in os.listdir(shaped_recipe_dir):
    if filename.endswith('.json'):
        # Construct the full path to the JSON file
        json_file_path = os.path.join(shaped_recipe_dir, filename)

        # Load the JSON data from the file
        with open(json_file_path, 'r') as json_file:
            recipe_data = json.load(json_file)

        # Check if the recipe has the "crafting_table" tag
        tags = recipe_data.get("tags", [])
        if "crafting_table" in tags:
            # Determine the type of recipe (shaped)
            if "minecraft:recipe_shaped" in recipe_data:
                recipe_type = "minecraft:recipe_shaped"
                pattern = recipe_data[recipe_type]["pattern"]
                key = recipe_data[recipe_type]["key"]
                # Rest of the shaped recipe processing (same as in the original script)

            # Add the JavaScript code for the recipe to the list
            js_code_combined.append(f'''
builder
  .createRecipe("{recipe_data[recipe_type]["description"]["identifier"]}")
  .addIngredients("{recipe_data[recipe_type]["description"]["identifier"]}", {json.dumps(counted_ingredients)})
  .setResult("{recipe_data[recipe_type]["description"]["identifier"]}", {result_count});
''')

# Process shapeless recipes
for filename in os.listdir(shapeless_recipe_dir):
    if filename.endswith('.json'):
        # Construct the full path to the JSON file
        json_file_path = os.path.join(shapeless_recipe_dir, filename)

        # Load the JSON data from the file
        with open(json_file_path, 'r') as json_file:
            recipe_data = json.load(json_file)

        # Check if the recipe has the "crafting_table" tag
        tags = recipe_data.get("tags", [])
        if "crafting_table" in tags:
            # Determine the type of recipe (shapeless)
            if "minecraft:recipe_shapeless" in recipe_data:
                recipe_type = "minecraft:recipe_shapeless"
                ingredients = recipe_data[recipe_type]["ingredients"]
                # Rest of the shapeless recipe processing (same as in the original script)

            # Add the JavaScript code for the recipe to the list
            js_code_combined.append(f'''
builder
  .createRecipe("{recipe_data[recipe_type]["description"]["identifier"]}")
  .addIngredients("{recipe_data[recipe_type]["description"]["identifier"]}", {json.dumps(counted_ingredients)})
  .setResult("{recipe_data[recipe_type]["description"]["identifier"]}", {result_count});
''')

# Finally, write the JavaScript code for both shaped and shapeless recipes to a file
with open('generated_recipe_combined.js', 'w') as js_file:
    js_file.write('\n'.join(js_code_combined))

print("JavaScript file 'generated_recipe_combined.js' created successfully for recipes with the 'crafting_table' tag.")
