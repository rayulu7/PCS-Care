# TODO: Authentication Pages Cleanup

## Steps to Complete:
1. [x] Modify App.jsx to conditionally render Stats, ClientsCarousel, TestimonialCarousel, and Footer components
2. [x] Exclude these components from login/register routes
3. [x] Create a Signup component in the Registration folder
4. [x] Add a route for the signup page in App.jsx
5. [x] Update the login page to use React Router Link for navigation to signup
6. [x] Update RouteAwareComponents to exclude signup route as well
7. [x] Create a Forgot Password component
8. [x] Add a route for the forgot password page in App.jsx
9. [x] Update the login page to use React Router Link for forgot password navigation
10. [x] Update RouteAwareComponents to exclude forgot password route as well
11. [ ] Test the navigation between login, signup, and forgot password pages

## Routes to exclude components from:
- /login (Registration page)
- /signup (Signup page)
- /forgot-password (Forgot Password page)

## Components to conditionally exclude:
- <Stats /> (metrics)
- <ClientsCarousel /> (testimonials/clients)
- <TestimonialCarousel /> (testimonials)
- <Footer /> (footer)

## Implementation Approach:
Use React Router's useLocation hook to check current path and conditionally render components
