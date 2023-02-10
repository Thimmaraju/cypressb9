Feature:  Validate Login functiionality

   We are validating positive and negative tests of Login


   Scenario: Verify login with Valid creds

      Given User lauch the Application
      When  User enter username "Admin" and Password "admin123"
      And   User click on the Login Button
      Then  User should be navigated to dashboard


   Scenario Outline: Verify login with InValid creds

      Given User lauch the Application
      When  User enter Invalid username '<Username>' and Invalid Password '<Password>'
      And   User click on the Login Button
      Then  User should get error message

      Examples:
         | Username    | Password        |
         | dkjbndkbqw  | admin123        |
         | Admin       | adminmfbhjbf123 |
         | Admerkfbkin | adminmfbhjbf123 |