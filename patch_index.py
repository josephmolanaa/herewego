import sys

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# find fleet-grid
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if '<div class="fleet-grid">' in line:
        start_idx = i
        break

if start_idx != -1:
    for i in range(start_idx+1, len(lines)):
        if '        </div>' in line or '</section>' in lines[i+1]:
            # The closing div is at line 662.
            # Let's just use exact indices if they match what we saw.
            pass

# From what we saw:
# 294:         <div class="fleet-grid">
# ...
# 662:         </div>
# 663:     </section>

start_idx = 293  # 0-indexed for 294
end_idx = 661    # 0-indexed for 662

new_lines = lines[:start_idx] + ['        <div id="fleet-grid" class="fleet-grid"></div>\n'] + lines[end_idx+1:]

# find script insertion
script_idx = -1
for i, line in enumerate(new_lines):
    if 'script.js?v=4' in line:
        script_idx = i
        break

if script_idx != -1:
    new_lines.insert(script_idx, '    <script src="armada.js"></script>\n')

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Modified index.html successfully.")
