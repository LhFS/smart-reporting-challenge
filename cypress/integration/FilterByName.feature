Feature: Filter

Scenario: Filter by name

Given that I access the application
When I type the name of one computer already registered
And press the Filter by name button
Then the system have to show the computer filtered