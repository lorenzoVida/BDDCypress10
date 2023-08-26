Feature: shop products
  Scenario: search a product
    #usage parameters and examples
    Given Enter the web shop exito.com
    When I fill search "<nameProduct>"

    Examples:
    | nameProduct |
    | speeker  |