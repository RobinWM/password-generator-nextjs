'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Copy } from 'lucide-react';
import { Shield } from 'lucide-react';

export default function Home() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState([12]);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = lowercase;
    if (includeUppercase) chars += uppercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let newPassword = '';
    for (let i = 0; i < length[0]; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <Shield className="w-16 h-16 text-emerald-400" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Secure Password Generator
          </h1>
          <p className="text-gray-400 max-w-md">
            Generate strong, secure passwords instantly with our advanced password generator.
            Customize your password requirements and create unbreakable combinations.
          </p>

          <div className="w-full bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
            <div className="relative">
              <input
                type="text"
                value={password}
                readOnly
                className="w-full bg-gray-900 text-lg p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                placeholder="Your secure password"
              />
              {password && (
                <Button
                  onClick={copyToClipboard}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              )}
            </div>

            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Password Length: {length[0]}</Label>
                </div>
                <Slider
                  value={length}
                  onValueChange={setLength}
                  max={32}
                  min={8}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Include Uppercase Letters</Label>
                  <Switch
                    checked={includeUppercase}
                    onCheckedChange={setIncludeUppercase}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Include Numbers</Label>
                  <Switch
                    checked={includeNumbers}
                    onCheckedChange={setIncludeNumbers}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Include Symbols</Label>
                  <Switch
                    checked={includeSymbols}
                    onCheckedChange={setIncludeSymbols}
                  />
                </div>
              </div>

              <Button
                onClick={generatePassword}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-200"
              >
                Generate Password
              </Button>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            Your security is our priority. Passwords are generated locally in your browser.
          </div>
        </div>
      </div>
    </main>
  );
}