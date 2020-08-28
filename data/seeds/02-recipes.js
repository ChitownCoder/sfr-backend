exports.seed = function (knex) {
	// Deletes ALL existing entries
			// Inserts seed entries
			return knex('recipes').insert([
				{
					id: 1,
					title: 'Buttermilk Biscuits',
					source: 'Grandma Newman',
					ingredients: '2 cups app-purpose flour, 1 tablespoon baking powder, 1/4 teaspoon baking soda, 2 teaspoons sugar, 1 teaspoon salt, 6 tablespoons cold butter, 3/4 cup cold buttermilk',
					instructions: '1.Preheat oven to 450°F. Line a large baking sheet with parchment paper or a silicone baking mat and ',
					category: 'Breakfast',
					image: 'https://hostthetoast.com/wp-content/uploads/2016/09/Ultra-Flaky-Buttermilk-Biscuits-60.jpg',
					user_id: '1',
				},
				{
					id: 2,
					title: 'Chicago Style Pizza',
					source: 'Uncle Pete',
					ingredients: '1 teaspoon sugar, 1 packet active dry yeast, 18 ounces app-purpose flour, 2 teaspoons salt, 1/8 teaspoon cream of tarter, 1/2 cup plus 3 tablespoons oil, 1 tablespoon of melted butter, 12 ounces sliced mozzarella, 1 pound bulk italian sausage, 8 ounces sliced pepperoni, 1 28 ounces can tomatoes, grated parmesan',
					instructions: '1. Mix sugar, yeast and 11 ounces room temperature water (about 80 degrees) in a bowl and let bloom for 15 minutes. Combine flour, salt and cream of tartar in the bowl of a stand mixer. Once yeast has bloomed, add to dry',
					category: 'Italian',
					image: 'https://chicagopizzasportsgrille.com/wp-content/uploads/2015/09/chicagopizza2.png',
					user_id: '2'
				},
				{
					id: 3,
					title: 'Breaded Pork Chops',
					source: 'Uncle Pete',
					ingredients: '3 large eggs, 3 tablespoons of milk, 1 1/2 cups breadcrumbs, 1/2 cup grated parmesan cheese, 2 tablespoons olive oil, 4 cloves of garlic, 2 tablespoons dried parsley, 4 thick pork chops',
					instructions: '1. Preheat oven to 325 degrees, 2. In a small bowl, beat together the eggs and milk. In a separate  ',
					category: '',
					image: 'https://www.jocooks.com/wp-content/uploads/2019/08/italian-breaded-pork-chops-1.jpg',
					user_id: '2',
				},
			]);
		}

