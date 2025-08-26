# Blueprint

## Overview:
The Puja Portal will be a web application that allows users to browse and order pooja services and samagri, as well as book Pandit Ji. The application will feature a fixed header and footer, a central content area for displaying services and samagri, and dedicated sections for samagri ordering, Pandit Ji booking, and service details.
The application will use Angular Material for UI components and styling.
 
## Project Outline:

- **Initial Version (Phase 1):** Set up the basic Angular project structure with standalone components, implement the fixed header and footer using Angular Material, and create a placeholder for the main content area. Implement the basic header structure with logo and user profile, including an enhanced logout button using Material primary style. Corrected header component import in app.ts and adjusted header CSS for visibility. Implement the fixed footer with copyright information. Fixed routerLink error in header by importing RouterLink.
- **Phase 2:** Implement the Samagri Ordering feature. Generate the SamagriOrderComponent, add routing, create a navigation link, display a list of samagri products with quantity inputs using Material components, and ensure the component uses ChangeDetectionStrategy.OnPush. Fixed mat-card error in SamagriOrderComponent by importing MatCardModule. Fixed router-outlet error in SamagriOrderComponent by importing RouterOutlet. Fixed ngSrc error in SamagriOrderComponent by importing NgOptimizedImage. Fixed Map.set error in SamagriOrderComponent constructor. Created SamagriService to provide product data and injected it into SamagriOrderComponent. Organized SamagriService by moving it to a service folder and updating the import path. Renamed the Samagri class to SamagriService.
 - **Phase 2:** Implement the Samagri Ordering feature. Generate the SamagriOrderComponent, add routing, create a navigation link, display a list of samagri products with quantity inputs using Material components, and ensure the component uses ChangeDetectionStrategy.OnPush. Fixed mat-card error in SamagriOrderComponent by importing MatCardModule. Fixed router-outlet error in SamagriOrderComponent by importing RouterOutlet. Fixed ngSrc error in SamagriOrderComponent by importing NgOptimizedImage. Fixed Map.set error in SamagriOrderComponent constructor. Created SamagriService to provide product data and injected it into SamagriOrderComponent. Organized SamagriService by moving it to a service folder and updating the import path. Renamed the Samagri class to SamagriService. Created PortalMainComponent to act as a container for routed components within the main content area and updated routing to use it.
- **Phase 3:** Implement the logic for updating quantities and calculating the total order.
- **Phase 4:** Create the Pandit Ji booking system using Angular Material components, allowing users to choose a service, date, and time.
- **Phase 5:** Build the service details component using Angular Material components to display detailed information about each pooja service.
- **Phase 6:** Implement user authentication (login/logout) and the user profile dropdown in the header using Angular Material components.
- **Phase 7:** Apply the specified styling guidelines (colors, fonts, icons, layout, animations) using Material's theming and utility classes.
- **Phase 8:** Ensure the application is mobile-responsive.

## Current Plan (Phase 1):

 1. Generate a header component.
 2. Generate a footer component.
 3. Update the main application component (`app.ts`, `app.html`, `app.css`) to include the header and footer, and create a basic structure for the main content area.
 4. Add the specified font (\'PT Sans\') to the project\'s `index.html\'.
 5. Add the specified background color to the body in `styles.css\'.
 6. Create the `blueprint.md` file in the root directory and document the project plan.
 7. Update the header component to include a logo placeholder and a user profile section with a logout button, and apply basic styling.
 8. Add Angular Material to the project.
 9. Configure Angular Material in the `app.config.ts` file.
 10. Update the header component to use Material components (e.g., `mat-toolbar\`, `button\`).
 11. Update the styles to use Material\'s theming or utility classes where appropriate.
 12. Enhance the logout button using `mat-raised-button` and `color=\"primary\"` and add basic styling to the user profile section for layout.
 13. Correct header component import in app.ts.
 14. Debug header visibility by reviewing and adjusting CSS in styles.css and header.css, including adding explicit height and flex properties to the header component.
 15. Implement the fixed footer with copyright information in the footer component and apply basic styling.
 16. Fix routerLink error in header by importing RouterLink and adding it to the imports array in header.ts.

 ## Current Plan (Phase 2):

 1. Generate a new standalone component for Samagri Ordering (e.g., `SamagriOrderComponent`).
 2. Add routing to `app.routes.ts` to navigate to the `SamagriOrderComponent`.
 3. Create a placeholder link or button in the header or main content area to navigate to the Samagri Ordering page.
 4. In the `SamagriOrderComponent`, create a list of samagri products (Havan materials, Agarbatti, Dhoop Batti) with placeholders for images, names, and descriptions.
 5. Implement a basic way for users to input the desired quantity for each item (e.g., using input fields).
 6. Ensure the `SamagriOrderComponent` uses `ChangeDetectionStrategy.OnPush`.
 7. Update the blueprint.md file to reflect the start of the Samagri Ordering feature.
 8. Fix mat-card error in SamagriOrderComponent by importing MatCardModule and adding it to the imports array in samagri-order.ts.
 9. Fix router-outlet error in SamagriOrderComponent by importing RouterOutlet and adding it to the imports array in samagri-order.ts.
 10. Fix ngSrc error in SamagriOrderComponent by importing NgOptimizedImage and adding it to the imports array in samagri-order.ts.
 11. Fix Map.set error in SamagriOrderComponent constructor by providing both key and value.
 12. Create SamagriService to provide product data and inject it into SamagriOrderComponent to fetch the data and update the samagriProducts signal.
 13. Organize SamagriService by moving it to a service folder and updating the import path in samagri-order.ts.
 14. Rename the Samagri class to SamagriService in samagri.service.ts.

 15. Create PortalMainComponent to act as a container for routed components within the main content area and update routing in app.routes.ts to use it, including setting up a child route for samagri-order and a default redirect.
 16. Add <router-outlet /> to PortalMainComponent and remove it from SamagriOrderComponent.