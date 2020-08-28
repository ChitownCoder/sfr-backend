exports.seed = function (knex) {
	// Deletes ALL existing entries
			// Inserts seed entries
			return knex('recipes').insert([
				{
					id: 1,
					title: 'Buttermilk Biscuits',
					source: 'Grandma Newman',
					ingredients: '2 cups app-purpose flour, 1 tablespoon baking powder, 1/4 teaspoon baking soda, 2 teaspoons sugar, 1 teaspoon salt, 6 tablespoons cold butter, 3/4 cup cold buttermilk',
					instructions: '1.Preheat oven to 450°F. Line a large baking sheet with parchment paper or a silicone baking mat and set aside, 2.In a large mixing bowl, whisk together the flour, baking powder, baking soda, sugar, and salt until well combined. Add the in the cubed cold butter and cut into the dry ingredients using a pastry cutter (you may also use a food processor for this step) until you have small pea sized pieces of butter. Pour the cold buttermilk into the mixture and gently work it together until the dough starts to come together, 3.Scoop the dough onto a lightly floured surface and gently work it together with your hands. Pat the dough into a rectangle and fold it in thirds. Turn the dough, gather any crumbs, and flatten back into a rectangle. Repeat this process two more times, 4.Place the dough onto a lightly floured surface and pat it down into a 1/2-inch thick rectangle (make sure to measure!). Using a floured 2.5-inch biscuit cutter, cut out the biscuits. Continue to gather any scrap pieces of dough, patting it back down to 1/2-inch thickness, and cutting it until you have 12 biscuits. I suggest trying to get as many as you can the first time, as you continue to work the dough the biscuits wont be quite as good, 5. Arrange the biscuits on the baking sheet touching each other. Brush the top of each biscuit with a little bit of buttermilk, 6. Bake at 450°F for about 15-17 minutes or until lightly golden brown. Remove from the oven and brush with melted butter if desired. Allow to cool for a few minutes, serve, and enjoy! ',
					category: 'Breakfast',
					image: 'https://hostthetoast.com/wp-content/uploads/2016/09/Ultra-Flaky-Buttermilk-Biscuits-60.jpg',
					user_id: '1',
				},
				{
					id: 2,
					title: 'Chicago Style Pizza',
					source: 'Uncle Pete',
					ingredients: '1 teaspoon sugar, 1 packet active dry yeast, 18 ounces app-purpose flour, 2 teaspoons salt, 1/8 teaspoon cream of tarter, 1/2 cup plus 3 tablespoons oil, 1 tablespoon of melted butter, 12 ounces sliced mozzarella, 1 pound bulk italian sausage, 8 ounces sliced pepperoni, 1 28 ounces can tomatoes, grated parmesan',
					instructions: '1. Mix sugar, yeast and 11 ounces room temperature water (about 80 degrees) in a bowl and let bloom for 15 minutes. Combine flour, salt and cream of tartar in the bowl of a stand mixer. Once yeast has bloomed, add to dry ingredients along with corn oil. Gently combine with a rubber spatula until a rough ball is formed., 2, Knead on low speed with the dough hook for 90 seconds. Transfer to a lightly oiled bowl and proof until doubled in size, about 6 hours. Punch down and let dough settle for 15 more minutes. 3. Coat bottom and sides of a 12-inch cake pan or traditional Chicago style pizza pan with melted butter. Using your hands, spread out about three-quarters of the dough across the bottom and up the sides of the pan (save the remainder for another use). Cover entire bottom in mozzarella, all the way up to the edge. Cover half with a thin, even layer of raw sausage. Cover the other half with the pepperoni. Top with a couple handfuls of crushed tomatoes. Spread out with hands to the edge. Sprinkle top evenly with grated Parm, 4. Bake at 450, rotating halfway through, until golden around the edge, about 25 minutes. Let rest for about 5 minutes, then either gently lift pizza out of pan or just cut your slice out of the pan like a pie!',
					category: 'Italian',
					image: 'https://chicagopizzasportsgrille.com/wp-content/uploads/2015/09/chicagopizza2.png',
					user_id: '2',
				},
				{
					id: 3,
					title: 'Breaded Pork Chops',
					source: 'Uncle Pete',
					ingredients: '3 large eggs, 3 tablespoons of milk, 1 1/2 cups breadcrumbs, 1/2 cup grated parmesan cheese, 2 tablespoons olive oil, 4 cloves of garlic, 2 tablespoons dried parsley, 4 thick pork chops',
					instructions: '1. Preheat oven to 325 degrees, 2. In a small bowl, beat together the eggs and milk. In a separate small bowl, mix the bread crumbs, Parmesan cheese, and parsley. 3. Heat the olive oil in a large, oven-proof skillet over medium heat. Stir in the garlic, and cook until lightly browned. Remove garlic, reserving for other uses. 4. Dip each pork chop into the egg mixture, then into the bread crumb mixture, coating evenly. Place coated pork chops in the skillet, and brown abut 5 minutes on each side. 5. Place the skillet and pork chops in the preheated oven, and cook 25 minutes, or to an internal temperature of 145 degrees F  ',
					category: '',
					image: 'https://www.jocooks.com/wp-content/uploads/2019/08/italian-breaded-pork-chops-1.jpg',
					user_id: '2',
				},
			]);
		}

