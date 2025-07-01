# TextUtils - Advanced Text Analysis Tool

![TextUtils Banner](https://img.shields.io/badge/TextUtils-v2.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7952b3.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A powerful, feature-rich text manipulation and analysis tool built with React and Bootstrap. TextUtils provides comprehensive text statistics, transformation capabilities, and export options with a beautiful, responsive interface.

## 🚀 Live Demo

[View Live Demo](https://kalasoftware.github.io/TextUtils-React)

## ✨ Features

### 🔤 Text Transformations
- **Uppercase Conversion** - Convert text to UPPERCASE
- **Lowercase Conversion** - Convert text to lowercase
- **Clear Text** - Clear all text with one click

### 📊 Advanced Text Analytics
- **Basic Statistics**
  - Total characters (with and without spaces)
  - Word count
  - Sentence count
  - Paragraph count
  - Line count

- **Advanced Metrics**
  - Average words per sentence
  - Average characters per word
  - Most common word identification
  - Longest and shortest word detection
  - Word frequency analysis (Top 5 most used words)

### ⏱️ Time Estimates
- **Reading Time** - Estimated time to read (@ 200 WPM)
- **Speaking Time** - Estimated time to speak (@ 150 WPM)
- **Typing Time** - Estimated time to type (@ 10 WPM)

### 📋 Copy & Export Features
- **Copy to Clipboard** - One-click copy functionality with fallback support
- **Download as TXT** - Download processed text as a text file
- **Download as JSON** - Export text with complete statistics in JSON format
- **Timestamped Files** - All downloads include timestamps in filenames

### 🎨 User Interface
- **Dark/Light Theme** - Toggle between themes with preference saving
- **Responsive Design** - Works perfectly on all devices
- **Real-time Updates** - Statistics update as you type
- **Visual Feedback** - Smooth animations and transitions
- **Accessibility** - WCAG compliant with keyboard navigation

### 🔧 Additional Features
- **Local Storage** - Theme preference persistence
- **Error Handling** - Graceful error handling with user feedback
- **Performance Optimized** - Efficient rendering and calculations
- **PWA Ready** - Progressive Web App capabilities

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/Kalasoftware/TextUtils-React.git
cd TextUtils-React
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Start Development Server
```bash
npm start
# or
yarn start
```

The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to GitHub Pages
```bash
npm run deploy
# or
yarn deploy
```

## 📁 Project Structure

```
TextUtils-React/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon files
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── TextForm.js
│   │   └── Alert.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── package.json
└── README.md
```

## 🎯 Usage Examples

### Basic Text Analysis
1. Enter or paste your text in the textarea
2. View real-time statistics in the analytics panels
3. Use transformation buttons to modify text
4. Copy or download your processed text

### Advanced Features
- **Copy Text**: Click the "Copy Text" button to copy to clipboard
- **Download Options**: Choose between TXT or JSON download formats
- **Theme Toggle**: Use the switch in the navbar to change themes
- **Word Frequency**: View the top 5 most frequently used words

## 🔧 Technical Details

### Built With
- **React 18.2.0** - Frontend framework
- **Bootstrap 5.x** - CSS framework
- **Font Awesome** - Icons
- **Web Vitals** - Performance monitoring

### Key Components

#### TextForm Component
- Main text input and processing
- Real-time statistics calculation
- Copy and download functionality
- Text transformation methods

#### Navbar Component
- Theme toggle functionality
- Responsive navigation
- GitHub integration

#### Alert Component
- User feedback system
- Multiple alert types
- Auto-dismiss functionality

### Performance Features
- **Debounced Calculations** - Optimized for large text inputs
- **Memoized Components** - Prevents unnecessary re-renders
- **Lazy Loading** - Components loaded on demand
- **Efficient State Management** - Minimal state updates

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Use ESLint configuration provided
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Bootstrap team for the CSS framework
- Font Awesome for the beautiful icons
- All contributors and users of this project

## 📞 Contact

- **GitHub**: [@Kalasoftware](https://github.com/Kalasoftware)
- **Project Link**: [https://github.com/Kalasoftware/TextUtils-React](https://github.com/Kalasoftware/TextUtils-React)

## 🔄 Version History

### v2.0.0 (Latest)
- ✅ Enhanced copy to clipboard functionality
- ✅ Multiple download formats (TXT, JSON)
- ✅ Advanced text statistics and analytics
- ✅ Word frequency analysis
- ✅ Time estimates (reading, speaking, typing)
- ✅ Improved UI/UX with better responsive design
- ✅ Theme persistence with localStorage
- ✅ Performance optimizations

### v1.0.0
- ✅ Basic text transformations
- ✅ Simple word and character count
- ✅ Dark/Light theme toggle
- ✅ Responsive design

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Kalasoftware](https://github.com/Kalasoftware)
