import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import DashboardPage from './pages/DashboardPage'
import AdsPage from './pages/AdsPage'
import AnalyticsPage from './pages/AnalyticsPage'
import GeneratorPage from './pages/GeneratorPage'
import CompetitorsPage from './pages/CompetitorsPage'
import SettingsPage from './pages/SettingsPage'
import SupportPage from './pages/SupportPage'
import MultiAccountPage from './pages/MultiAccountPage'
import DraftsPage from './pages/DraftsPage'
import BulkEditorPage from './pages/BulkEditorPage'
import ProofBoostPage from './pages/ProofBoostPage'
import AICopycatPage from './pages/AICopycatPage'
import PhotoEnhancerPage from './pages/PhotoEnhancerPage'
import NotificationsPage from './pages/NotificationsPage'
import SEOPage from './pages/SEOPage'
import CreateAdPage from './pages/CreateAdPage'
import AutoposterPage from './pages/AutoposterPage'
import UserProfilePage from './pages/UserProfilePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import SubscriptionPage from './pages/SubscriptionPage'
import './App.css'

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="app">
      <TopBar
        onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar isMobileOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
      <div className="main-content">
        <Routes>
          {/* Основные маршруты */}
          <Route path="/" element={<DashboardPage />} />
          <Route path="/ads" element={<AdsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/competitors" element={<CompetitorsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/multi-account" element={<MultiAccountPage />} />
          <Route path="/drafts" element={<DraftsPage />} />
          <Route path="/bulk-editor" element={<BulkEditorPage />} />
          <Route path="/archive" element={<DraftsPage />} />
          <Route path="/proof-boost" element={<ProofBoostPage />} />
          <Route path="/ai-copycat" element={<AICopycatPage />} />
          <Route path="/ai/photo-enhancer" element={<PhotoEnhancerPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/ai/seo-optimizer" element={<SEOPage />} />
          <Route path="/create-ad" element={<CreateAdPage />} />
          <Route path="/autoposter" element={<AutoposterPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          
          {/* Подмаршруты для Analytics */}
          <Route path="/analytics/views" element={<AnalyticsPage />} />
          <Route path="/analytics/contacts" element={<AnalyticsPage />} />
          <Route path="/analytics/ctr" element={<AnalyticsPage />} />
          <Route path="/analytics/ai-forecast" element={<AnalyticsPage />} />
          
          {/* Подмаршруты для AI-инструментов */}
          <Route path="/ai/descriptions" element={<GeneratorPage />} />
          <Route path="/ai/card-rating" element={<GeneratorPage />} />
          <Route path="/ai/avitolog-pro" element={<GeneratorPage />} />
          
          {/* Подмаршруты для Конкурентов */}
          <Route path="/competitors/analysis" element={<CompetitorsPage />} />
          <Route path="/competitors/price-history" element={<CompetitorsPage />} />
          <Route path="/competitors/position-comparison" element={<CompetitorsPage />} />
          <Route path="/competitors/ai-report" element={<CompetitorsPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App