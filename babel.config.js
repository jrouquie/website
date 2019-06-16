module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    ["prismjs", {
        "languages": ["javascript", "css", "markup", "bash", "python", "dockerfile"],
        "plugins": ["line-numbers"],
        "theme": "twilight",
        "css": true
    }]
  ]
}
