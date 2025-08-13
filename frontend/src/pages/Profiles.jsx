import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import Spinner from "../components/Spinner";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaMapMarkerAlt, FaGlobe, FaBook, FaCalendar, FaEye } from "react-icons/fa";

const Profiles = () => {
  const { user } = useAuth();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      setLoading(true);
      const response = await api.get("/users/profiles");
      setProfiles(response.data.data);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to load profiles");
    } finally {
      setLoading(false);
    }
  };

  // Helper function to format publish year
  const formatPublishYear = (year) => {
    if (!year || year === 0 || year === 1970) {
      return "N/A";
    }
    return year;
  };

  if (loading) return <Spinner />;

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Discover People</h1>

        {profiles.length === 0 ? (
          <div className="text-center py-12">
            <FaUser className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No profiles found</h3>
            <p className="mt-1 text-sm text-gray-500">
              There are no other users to discover at the moment.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {profiles.map((profile) => (
              <div
                key={profile._id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                {/* User Profile Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {profile.profile.firstName && profile.profile.lastName
                        ? `${profile.profile.firstName} ${profile.profile.lastName}`
                        : profile.username}
                    </h2>
                    <p className="text-lg text-gray-500">@{profile.username}</p>
                    <p className="text-sm text-gray-400">
                      Member since {new Date(profile.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* User Bio and Details */}
                {profile.profile.bio && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                    <p className="text-gray-600">{profile.profile.bio}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Profile Details */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Profile Details</h3>
                    {profile.profile.location && (
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-3 text-gray-400" />
                        <span>{profile.profile.location}</span>
                      </div>
                    )}
                    
                    {profile.profile.website && (
                      <div className="flex items-center text-gray-600">
                        <FaGlobe className="mr-3 text-gray-400" />
                        <a
                          href={profile.profile.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {profile.profile.website}
                        </a>
                      </div>
                    )}

                    {profile.profile.favoriteGenres && profile.profile.favoriteGenres.length > 0 && (
                      <div className="flex items-start text-gray-600">
                        <FaBook className="mr-3 mt-1 text-gray-400" />
                        <div>
                          <span className="font-medium">Favorite Genres:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {profile.profile.favoriteGenres.map((genre, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                              >
                                {genre}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Books Summary */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Book Collection</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">Total Books:</span>
                        <span className="font-semibold text-gray-900">{profile.books.count}</span>
                      </div>
                      {profile.books.count > 0 && (
                        <div className="text-sm text-gray-500">
                          Latest book added: {new Date(profile.books.data[0].createdAt).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Books List */}
                {profile.books.count > 0 ? (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Books</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {profile.books.data.map((book) => (
                        <div
                          key={book._id}
                          className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 line-clamp-2">
                              {book.title}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {book.genre}
                            </span>
                            <div className="flex items-center">
                              <FaCalendar className="mr-1" />
                              {formatPublishYear(book.publishYear)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <FaBook className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-gray-500">No books added yet</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profiles;
