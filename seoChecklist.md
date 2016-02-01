#SEO project_01

## [+] 1. Allow access to js/imgs for google bot (should be set in robots.txt)

## [-] 2. Should adhere to the principles of progressive enchancement.
  1. [-] basic content should be accessible to all web browsers
  2. [-] basic functionality should be accessible to all web browsers
  3. [-] sparse, semantic markup contains all content
  4. [-] enhanced layout is provided by externally linked CSS
  5. [-] enhanced behavior is provided by unobtrusive, externally linked JavaScript
  6. [-] end-user web browser preferences are respected

## [-] 3. Best practices of page performance optimization.
### [-]Optimizing content efficiency
  1. [GI] General optimization and download size reduction (overview article) / Optimizing content efficency
  2. [NA] Eliminating unnecessary downloads
    * Does the cost of downloading and displaying it ofset the value it deliveres to the user? 
    * Does the resource — especially if it is a third-party resource — deliver consistent performance?
    * If 3rd party resource is unavailable, will it affect performance and the user experience of our pages?
    * Does this resource need or have an SLA (Service level agreement)? Does this resource follow performance best practices: compression, caching, and so on?

  3. [-] Optimizing encoding and transfer size of text-based assets
    * use CSS compressors
    * consider what kinds of content-specific optimizations you can apply to reduce each type of content
    * first minify, then gzip content [gzip applicable to text files]
    * use server configs for gzip [https://github.com/h5bp/server-configs]
    * check if server compress [http://www.whatsmyip.org/http-compression-test/]

  4. [-] Image optimization
    * Leverage CSS3 effects
    * Use web fonts instead of encoding text in images
    * Use optimal image format - raster/vector
    * Prefer vector images for HiDPI
  5. [-] Web font optimization
  6. [-] HTTP caching

### []Critical rendering path
  1. []Critical rendering path
  2. []Constructing the Object Model
  3. []Render-tree construction, layout, and paint
  4. []Render blocking CSS
  5. []Adding interactivity with JavaScript
  6. []Measuring the critical rendering path with Navigation Timing
  7. []Analyzing critical rendering path performance
  8. []Optimizing the critical rendering path
  9. []PageSpeed rules and recommendations

### []Rendering performance
  1. []Rendering performance
  2. []Optimize JavaScript execution
  3. []Reduce the scope and complexity of style calculations
  4. []Avoid large, complex layouts and layout thrashing
  5. []Simplify paint complexity and reduce paint areas
  6. []Stick to compositor-only properties and manage layer count
  7. []Debounce your input handlers

### []Performance codelab
  1. []Performance codelab
  2. []About the project app
  3. []Improve list scrolling performance
  4. []Story concatenation
  5. []Story slide-in/out (part 1)
  6. []Memory waste
  7. []Story slide-in/out (part 2)

~~##Eliminate unnecessary downloads and optimize serving of CSS and Javascript files~~
