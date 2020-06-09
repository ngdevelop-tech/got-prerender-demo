# Prerender Angular Application using Angular Universal Prerenderer

This is a demo application created for Prerendering Angular Application Demo. This application is built in Angular v9 and with Angular Universal v9 features.

## Features

- Measure Application Performance with FCP : First Contentful Paint.
- Script for fetching FCP time.
- Implementing SSR.
- Prerendering Static & Dynamic Routes.

## Measure Performance with FCP time script
> Add this script in `head` section of `index.html`.

```html
  <script>
    // Log the value of FCP to the console | https://web.dev/fcp/#measure-fcp-in-javascript 
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntriesByName('first-contentful-paint')) {
        console.log('FCP: ', entry.startTime);
        observer.disconnect();
      }
    })

    observer.observe({type: 'paint', buffered: true});
  </script>

```
## Checkout the 🚀 live application : [https://got-prerender-demo.web.app/](https://got-prerender-demo.web.app/)


## Developed and Maintained By

This project is developed by 🌍[NgDevelop](https://www.ngdevelop.tech/) for the 📄[Prerender Angular Application using Angular Universal Prerenderer](https://www.ngdevelop.tech/prerender-angular-application-using-angular-universal-prerenderer/) blog.
