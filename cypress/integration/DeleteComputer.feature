Feature: Delete

Scenario: Delete Computer

Given that I access the application
When I filter by name and access one computer
And click on Delete this computer
Then the system have to show a message of delete success