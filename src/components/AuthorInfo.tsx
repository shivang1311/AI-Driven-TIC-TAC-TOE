import React from 'react';
import { X, Github, Linkedin, Mail } from 'lucide-react';
import { Theme } from '../types';
import { authorInfo } from '../constants';

interface AuthorInfoProps {
  show: boolean;
  onClose: () => void;
  theme: Theme;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ show, onClose, theme }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`${
        theme === 'dark'
          ? 'bg-gray-800'
          : 'bg-white'
        } rounded-2xl shadow-2xl p-8 max-w-md w-full animate-scale-in`}>
        <div className="flex justify-between items-start mb-6">
          <h2 className={`text-2xl font-bold ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-400 to-purple-500'
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            About the Developer
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'hover:bg-gray-700'
                : 'hover:bg-gray-100'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-1">{authorInfo.name}</h3>
            <p className="text-sm opacity-80">{authorInfo.title}</p>
          </div>

          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {authorInfo.bio}
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={authorInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700/50 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href={authorInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700/50 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${authorInfo.email}`}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700/50 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;