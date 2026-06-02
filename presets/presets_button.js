const buttonTemplates = {
                    'primary': { name: 'Primary Red', styles: { background: '#e74c3c', color: '#fff', borderRadius: '8px', padding: '12px 40px' } },
                    'success': { name: 'Success Green', styles: { background: '#2ecc71', color: '#fff', borderRadius: '8px', padding: '12px 40px' } },
                    'pill_blue': { name: 'Pill Blue', styles: { background: '#3498db', color: '#fff', borderRadius: '50px', padding: '12px 40px' } },
                    'dark': { name: 'Dark Night', styles: { background: '#1a1a1a', border: '1px solid #333', color: '#fff', borderRadius: '8px', padding: '12px 40px' } },
                    'outline_white': { name: 'Outline White', styles: { background: 'transparent', border: '2px solid #ffffff', color: '#ffffff', borderRadius: '8px', padding: '12px 40px' } },
                    'outline_blue': { name: 'Outline Blue', styles: { background: 'transparent', border: '2px solid #3498db', color: '#3498db', borderRadius: '8px', padding: '12px 40px' } },
                    'glass': { name: 'Glassmorphism', styles: { background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '12px', padding: '12px 40px' } },
                    'soft': { name: 'Soft Tint', styles: { background: 'rgba(255,255,255,0.05)', color: '#fff', borderRadius: '8px', padding: '12px 40px' } },
                    'gradient_fire': { name: 'Fire Gradient', styles: { background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)', color: '#fff', borderRadius: '8px', padding: '12px 40px' } },
                    'gradient_ocean': { name: 'Ocean Breeze', styles: { background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', color: '#fff', borderRadius: '8px', padding: '12px 40px' } },
                    'golden': { name: 'Golden Glow', styles: { background: 'linear-gradient(135deg, #f1c40f, #f39c12)', color: '#000', borderRadius: '8px', boxShadow: '0 4px 15px rgba(241,196,15,0.4)', padding: '12px 40px' } },
                    'neon': { name: 'Neon Border', styles: { background: '#000', border: '2px solid #00f2fe', color: '#00f2fe', borderRadius: '8px', boxShadow: '0 0 10px #00f2fe', padding: '12px 40px' } },
                    'leafy': { name: 'Leafy Style', styles: { background: '#27ae60', color: '#fff', borderRadius: '30px 0 30px 0', padding: '12px 40px' } },
                    'petal': { name: 'Petal Style', styles: { background: '#e91e63', color: '#fff', borderRadius: '0 30px 0 30px', padding: '12px 40px' } },
                    'organic': { name: 'Organic Blob', styles: { background: '#9b59b6', color: '#fff', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', padding: '12px 40px' } },
                    'sharp_cut': { name: 'Sharp Cut', styles: { background: '#34495e', color: '#fff', borderRadius: '20px 2px 20px 2px', padding: '12px 40px' } },
                    'top_round': { name: 'Top Rounded', styles: { background: '#f39c12', color: '#fff', borderRadius: '25px 25px 0 0', padding: '12px 40px' } },
                    
                    // === NEW PRESETS FOR TESTING DYNAMIC UPDATE ===
                    'cyberpunk_btn': { name: 'Cyberpunk', styles: { background: '#f3e600', color: '#111', fontWeight: '900', border: '2px solid #111', borderRadius: '0px', boxShadow: '5px 5px 0px #ff003c', padding: '12px 40px', letterSpacing: '2px', textTransform: 'uppercase' } },
                    'floating_shadow_btn': { name: 'Floating 3D', styles: { background: '#ffffff', color: '#2563eb', fontWeight: '700', borderRadius: '50px', boxShadow: '0 10px 25px -5px rgba(37,99,235,0.4), 0 8px 10px -6px rgba(37,99,235,0.2)', padding: '15px 45px' } },
                    'retro_arcade_btn': { name: 'Retro Arcade', styles: { background: '#2c2c2c', color: '#39ff14', fontWeight: '700', fontFamily: "'Courier New', monospace", border: '4px solid #39ff14', borderRadius: '0px', boxShadow: 'inset 0 0 10px #39ff14, 0 0 10px #39ff14', padding: '12px 40px' } },
                    'liquid_aurora': { name: 'Liquid Aurora', styles: { background: 'linear-gradient(270deg, #ff00cc, #3333ff, #00f2fe)', color: '#fff', fontWeight: '800', borderRadius: '30px', padding: '15px 40px', boxShadow: '0 4px 15px rgba(255,0,204,0.3)' } },
                    'ghost_glitch': { name: 'Ghost Glitch', styles: { background: 'transparent', color: '#fff', fontWeight: '800', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '4px', textShadow: '-2px 0 #ff00ff, 2px 0 #00ffff', padding: '12px 40px', letterSpacing: '1px' } }
                };