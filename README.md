# BabyBytes - Baby Development Tracking Application

A Next.js application designed to help parents track their baby's development using voice AI technology.

## Project Structure

### Frontend (Next.js)

#### Core Files
- `app/page.tsx` - Landing page with main features showcase and navigation
- `app/layout.tsx` - Root layout component with font configuration and context providers
- `app/globals.css` - Global styling with Tailwind CSS configuration
- `app/types.ts` - TypeScript type definitions for components

#### Components
- `components/Summary.tsx` - Dashboard overview with food intake, sleep duration, and growth metrics
- `components/Navbar.tsx` - Navigation component with expandable sidebar
- `components/DataEntryBar.tsx` - Voice input interface for data entry
- `components/ImageUpload.tsx` - Component for uploading before/after meal images
- `components/PDFReportContent.tsx` - PDF report generation component
- `components/Message.tsx` - Chat message component
- `components/Feed.tsx` - Food tracking interface
- `components/Sleep.tsx` - Sleep tracking visualization
- `components/TabSwitch.tsx` - Tab navigation component

#### Pages
- `dashboard/page.tsx` - Main dashboard interface
- `chat/page.tsx` - AI chat interface
- `profile/page.tsx` - Baby profile management
- `report/page.tsx` - Report generation interface
- `history/page.tsx` - Historical data view
- `settings/page.tsx` - Application settings

### Backend (Python)

#### Core Files
- `app.py` - FastAPI application setup with CORS configuration
- `main.py` - Main application logic and API route handlers
- `audioinput.py` - Voice input processing with Deepgram integration
- `text_filter.py` - Text processing using Google's Gemini AI
- `visualizations.py` - Data visualization generation using Plotly

#### Database
- `db_crud.py` - Database CRUD operations
- `db_ops.py` - Database table definitions and setup
- `util.py` - Database utility functions

### Configuration Files
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.mjs` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts
- `requirements.txt` - Python dependencies

## Features
- Voice AI-powered data entry
- Real-time baby development tracking
- Food intake monitoring
- Sleep pattern analysis
- Growth tracking
- PDF report generation
- Historical data visualization
- Profile management

## Technologies
- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: FastAPI, Python
- AI/ML: Google Gemini AI, Deepgram
- Database: MySQL/SingleStore
- Visualization: Plotly