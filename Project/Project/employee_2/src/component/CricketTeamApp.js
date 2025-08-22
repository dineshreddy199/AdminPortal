import React, { useState, useEffect } from 'react';
import { 
  Home, Users, Calendar, Trophy, Settings, Shield, 
  Plus, Edit, Trash2, Eye, Star, Activity, Bell,
  Search, Filter, Download, Upload, BarChart3,
  User, Mail, Phone, MapPin, Award, Target
} from 'lucide-react';

const CricketTeamApp = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [notifications, setNotifications] = useState([]);

  // Sample data
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: 'Virat Kohli',
      role: 'Batsman',
      battingAvg: 58.07,
      bowlingAvg: 0,
      matches: 254,
      runs: 12344,
      wickets: 4,
      image: '🏏',
      age: 35,
      experience: 15,
      price: 15000000,
      nationality: 'Indian',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Jasprit Bumrah',
      role: 'Bowler',
      battingAvg: 8.22,
      bowlingAvg: 24.43,
      matches: 98,
      runs: 89,
      wickets: 159,
      image: '🎯',
      age: 30,
      experience: 8,
      price: 12000000,
      nationality: 'Indian',
      status: 'Active'
    },
    {
      id: 3,
      name: 'MS Dhoni',
      role: 'Wicket-keeper',
      battingAvg: 50.57,
      bowlingAvg: 0,
      matches: 350,
      runs: 10773,
      wickets: 0,
      image: '🧤',
      age: 42,
      experience: 18,
      price: 14000000,
      nationality: 'Indian',
      status: 'Captain'
    }
  ]);

  const [matches, setMatches] = useState([
    {
      id: 1,
      opponent: 'Mumbai Indians',
      date: '2024-07-20',
      time: '19:30',
      venue: 'Wankhede Stadium',
      status: 'upcoming',
      type: 'T20'
    },
    {
      id: 2,
      opponent: 'Royal Challengers',
      date: '2024-07-15',
      time: '15:30',
      venue: 'M. Chinnaswamy Stadium',
      status: 'completed',
      result: 'Won by 7 wickets',
      type: 'T20'
    }
  ]);

  const [stats, setStats] = useState({
    totalPlayers: 25,
    totalMatches: 45,
    wins: 28,
    losses: 17,
    winPercentage: 62.2,
    totalRuns: 8945,
    totalWickets: 342
  });

  useEffect(() => {
    // Simulate notifications
    setNotifications([
      { id: 1, message: 'New match scheduled against Mumbai Indians', time: '2 hours ago' },
      { id: 2, message: 'Player fitness report updated', time: '1 day ago' },
      { id: 3, message: 'Training session rescheduled', time: '2 days ago' }
    ]);
  }, []);

  const NavBar = () => (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl">
            🏏
          </div>
          <div>
            <h1 className="text-xl font-bold">Thunder Bolts</h1>
            <p className="text-sm opacity-90">Cricket Team</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setNotifications([])}
            className="relative p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
          >
            <Bell size={20} />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>
          <button 
            onClick={() => setIsAdmin(!isAdmin)}
            className={`p-2 rounded-full ${isAdmin ? 'bg-yellow-500' : 'bg-white bg-opacity-10'}`}
          >
            <Shield size={20} />
          </button>
        </div>
      </div>
    </div>
  );

  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        {[
          { id: 'home', icon: Home, label: 'Home' },
          { id: 'players', icon: Users, label: 'Players' },
          { id: 'matches', icon: Calendar, label: 'Matches' },
          { id: 'stats', icon: BarChart3, label: 'Stats' },
          { id: 'settings', icon: Settings, label: 'Settings' }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`flex flex-col items-center py-2 px-3 rounded-lg ${
              currentView === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const HomeView = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-xl">
          <h3 className="text-lg font-semibold">Next Match</h3>
          <p className="text-sm opacity-90">vs Mumbai Indians</p>
          <p className="text-xs opacity-75">July 20, 7:30 PM</p>
        </div>
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-4 rounded-xl">
          <h3 className="text-lg font-semibold">Team Ranking</h3>
          <p className="text-2xl font-bold">#3</p>
          <p className="text-xs opacity-75">League Position</p>
        </div>
      </div>

      {/* Recent Performance */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Performance</h3>
        <div className="space-y-3">
          {matches.filter(m => m.status === 'completed').slice(0, 3).map(match => (
            <div key={match.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">vs {match.opponent}</p>
                <p className="text-sm text-gray-600">{match.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-600">{match.result}</p>
                <p className="text-xs text-gray-500">{match.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Top Performers</h3>
        <div className="space-y-3">
          {players.slice(0, 3).map((player, index) => (
            <div key={player.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg">
                {player.image}
              </div>
              <div className="flex-1">
                <p className="font-medium">{player.name}</p>
                <p className="text-sm text-gray-600">{player.role}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{player.battingAvg > 0 ? `${player.battingAvg}` : `${player.bowlingAvg}`}</p>
                <p className="text-xs text-gray-500">{player.battingAvg > 0 ? 'Avg' : 'Bowling Avg'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Updates</h3>
          <div className="space-y-3">
            {notifications.map(notif => (
              <div key={notif.id} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <Bell size={16} className="text-blue-600 mt-1" />
                <div className="flex-1">
                  <p className="text-sm">{notif.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const PlayersView = () => (
    <div className="space-y-4">
      {/* Search and Filter */}
      <div className="flex space-x-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search players..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Filter size={16} />
        </button>
        {isAdmin && (
          <button 
            onClick={() => setCurrentView('add-player')}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus size={16} />
          </button>
        )}
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 gap-4">
        {players
          .filter(player => 
            player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            player.role.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(player => (
            <div key={player.id} className="bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl">
                  {player.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold">{player.name}</h3>
                    {player.status === 'Captain' && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{player.role}</p>
                  <p className="text-xs text-gray-500">{player.nationality}, {player.age} years</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{player.matches} matches</p>
                  <p className="text-xs text-gray-500">{player.runs} runs</p>
                  {player.wickets > 0 && (
                    <p className="text-xs text-gray-500">{player.wickets} wickets</p>
                  )}
                </div>
              </div>
              
              {/* Player Stats */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold text-blue-600">{player.battingAvg}</p>
                  <p className="text-xs text-gray-500">Bat Avg</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-green-600">{player.bowlingAvg}</p>
                  <p className="text-xs text-gray-500">Bowl Avg</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-purple-600">{player.experience}</p>
                  <p className="text-xs text-gray-500">Years Exp</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex space-x-2">
                <button 
                  onClick={() => setSelectedPlayer(player)}
                  className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center space-x-1"
                >
                  <Eye size={16} />
                  <span className="text-sm">View</span>
                </button>
                {isAdmin && (
                  <>
                    <button className="px-4 py-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors">
                      <Edit size={16} />
                    </button>
                    <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  const MatchesView = () => (
    <div className="space-y-4">
      {/* Match Filter Tabs */}
      <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
        {['All', 'Upcoming', 'Completed'].map(tab => (
          <button
            key={tab}
            className="flex-1 py-2 px-4 text-sm font-medium rounded-md bg-white shadow-sm"
          >
            {tab}
          </button>
        ))}
      </div>

      {isAdmin && (
        <button 
          onClick={() => setCurrentView('add-match')}
          className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Plus size={16} />
          <span>Add New Match</span>
        </button>
      )}

      {/* Matches List */}
      <div className="space-y-4">
        {matches.map(match => (
          <div key={match.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  {match.opponent.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">vs {match.opponent}</h3>
                  <p className="text-sm text-gray-600">{match.type} Match</p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                match.status === 'upcoming' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
              }`}>
                {match.status === 'upcoming' ? 'Upcoming' : 'Completed'}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-medium">{match.date} at {match.time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Venue</p>
                <p className="font-medium">{match.venue}</p>
              </div>
            </div>

            {match.result && (
              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <p className="text-sm font-medium text-green-800">Result: {match.result}</p>
              </div>
            )}

            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                View Details
              </button>
              {isAdmin && (
                <>
                  <button className="px-4 py-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors">
                    <Edit size={16} />
                  </button>
                  <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const StatsView = () => (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl">
          <h3 className="text-lg font-semibold">Win Rate</h3>
          <p className="text-3xl font-bold">{stats.winPercentage}%</p>
          <p className="text-sm opacity-90">{stats.wins} wins out of {stats.totalMatches}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-4 rounded-xl">
          <h3 className="text-lg font-semibold">Total Runs</h3>
          <p className="text-3xl font-bold">{stats.totalRuns}</p>
          <p className="text-sm opacity-90">Across all matches</p>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Team Performance</h3>
        <div className="space-y-4">
          {[
            { label: 'Total Players', value: stats.totalPlayers, icon: Users },
            { label: 'Matches Played', value: stats.totalMatches, icon: Calendar },
            { label: 'Victories', value: stats.wins, icon: Trophy },
            { label: 'Defeats', value: stats.losses, icon: Target },
            { label: 'Total Wickets', value: stats.totalWickets, icon: Activity }
          ].map(stat => (
            <div key={stat.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <stat.icon size={16} className="text-blue-600" />
                </div>
                <span className="font-medium">{stat.label}</span>
              </div>
              <span className="text-lg font-semibold text-blue-600">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Player Statistics */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Player Statistics</h3>
        <div className="space-y-3">
          {players.slice(0, 5).map(player => (
            <div key={player.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  {player.image}
                </div>
                <div>
                  <p className="font-medium">{player.name}</p>
                  <p className="text-sm text-gray-600">{player.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{player.runs} runs</p>
                {player.wickets > 0 && (
                  <p className="text-xs text-gray-500">{player.wickets} wickets</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SettingsView = () => (
    <div className="space-y-6">
      {/* Profile Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Team Profile</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
              🏏
            </div>
            <div>
              <h4 className="text-xl font-semibold">Thunder Bolts</h4>
              <p className="text-gray-600">Cricket Team</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Founded</p>
              <p className="font-medium">2015</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Home Ground</p>
              <p className="font-medium">Thunder Stadium</p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Options */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Settings</h3>
        <div className="space-y-3">
          {[
            { icon: Bell, label: 'Notifications', subtitle: 'Manage push notifications' },
            { icon: Users, label: 'Team Management', subtitle: 'Player and staff settings' },
            { icon: Download, label: 'Export Data', subtitle: 'Download team statistics' },
            { icon: Upload, label: 'Import Data', subtitle: 'Upload player information' },
            { icon: Shield, label: 'Admin Settings', subtitle: 'Administrative controls' }
          ].map((setting, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <setting.icon size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{setting.label}</p>
                <p className="text-sm text-gray-600">{setting.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Panel Toggle */}
      {isAdmin && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Admin Panel Active</h3>
          <p className="text-sm opacity-90 mb-4">You have administrative privileges</p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
              Manage Users
            </button>
            <button className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
              System Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const PlayerDetailModal = ({ player, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Player Details</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4">
              {player.image}
            </div>
            <h3 className="text-2xl font-bold">{player.name}</h3>
            <p className="text-gray-600">{player.role}</p>
            {player.status === 'Captain' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mt-2">
                <Star size={16} className="mr-1" />
                Captain
              </span>
            )}
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Age</p>
                <p className="font-semibold">{player.age} years</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-semibold">{player.experience} years</p>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Nationality</p>
              <p className="font-semibold">{player.nationality}</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Market Value</p>
              <p className="font-semibold">₹{player.price.toLocaleString()}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <p className="text-lg font-bold text-blue-600">{player.matches}</p>
                <p className="text-xs text-gray-600">Matches</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <p className="text-lg font-bold text-green-600">{player.runs}</p>
                <p className="text-xs text-gray-600">Runs</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg text-center">
                <p className="text-lg font-bold text-purple-600">{player.wickets}</p>
                <p className="text-xs text-gray-600">Wickets</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-3 rounded-lg text-center">
                <p className="text-lg font-bold text-yellow-600">{player.battingAvg}</p>
                <p className="text-xs text-gray-600">Batting Avg</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg text-center">
                <p className="text-lg font-bold text-red-600">{player.bowlingAvg}</p>
                <p className="text-xs text-gray-600">Bowling Avg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AddPlayerForm = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Add New Player</h2>
        <button 
          onClick={() => setCurrentView('players')}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Batsman</option>
                <option>Bowler</option>
                <option>All-rounder</option>
                <option>Wicket-keeper</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience (years)</label>
              <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Market Value</label>
              <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add Player
            </button>
            <button 
              onClick={() => setCurrentView('players')}
              className="flex-1 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const AddMatchForm = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Schedule New Match</h2>
        <button 
          onClick={() => setCurrentView('matches')}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Opponent Team</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input type="time" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Venue</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Match Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg">
              <option>T20</option>
              <option>ODI</option>
              <option>Test</option>
            </select>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Schedule Match
            </button>
            <button 
              onClick={() => setCurrentView('matches')}
              className="flex-1 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'players':
        return <PlayersView />;
      case 'matches':
        return <MatchesView />;
      case 'stats':
        return <StatsView />;
      case 'settings':
        return <SettingsView />;
      case 'add-player':
        return <AddPlayerForm />;
      case 'add-match':
        return <AddMatchForm />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      
      <div className="p-4 pb-20">
        {renderCurrentView()}
      </div>

      <BottomNav />

      {selectedPlayer && (
        <PlayerDetailModal 
          player={selectedPlayer} 
          onClose={() => setSelectedPlayer(null)} 
        />
      )}
    </div>
  );
};

export default CricketTeamApp;