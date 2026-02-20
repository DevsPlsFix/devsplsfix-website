"use client";

const scrollKeyframes = `
  @keyframes scroll-terminal {
    from { transform: translate3d(0, 0, 0); }
    to { transform: translate3d(0, -50%, 0); }
  }
`;

const LINES = [
  { type: "prompt", text: "$ npm run dev" },
  { type: "output", text: "> next dev" },
  { type: "output", text: "▲ Next.js 16.1.6" },
  { type: "output", text: "- Local: http://localhost:3000" },
  { type: "blank" },
  { type: "prompt", text: "$ npx @modelcontextprotocol/server" },
  { type: "output", text: "MCP server starting on stdio..." },
  { type: "output", text: "Registered 12 tools" },
  { type: "output", text: "cursor-ide-browser, filesystem, github" },
  { type: "blank" },
  { type: "prompt", text: "$ cursor --mcp" },
  { type: "output", text: "Connecting to MCP servers..." },
  { type: "output", text: "✓ chrome-devtools ready" },
  { type: "output", text: "✓ cursor-ide-browser ready" },
  { type: "blank" },
  { type: "prompt", text: "$ npx devs-pls-fix" },
  { type: "output", text: "Scanning codebase..." },
  { type: "output", text: "Found 3 fixable issues" },
  { type: "output", text: "Applying fixes..." },
  { type: "blank" },
  { type: "prompt", text: "$ git status" },
  { type: "output", text: "On branch main" },
  { type: "output", text: "Changes not staged for commit" },
  { type: "blank" },
  { type: "output", text: "[agent] Using tool: codebase_search" },
  { type: "output", text: "[agent] Using tool: run_terminal_cmd" },
  { type: "output", text: "[agent] Response stream complete" },
  { type: "blank" },
  { type: "prompt", text: "$ cat .cursor/mcp.json" },
  { type: "output", text: '  "mcpServers": {' },
  { type: "output", text: '    "filesystem": {...},' },
  { type: "output", text: '    "github": {...}' },
  { type: "blank" },
  { type: "output", text: "[LLM] model: claude-sonnet-4" },
  { type: "output", text: "[LLM] tokens: 1247 in / 4096 out" },
  { type: "output", text: "[LLM] finish_reason: stop" },
  { type: "blank" },
  { type: "prompt", text: "$ ls src/" },
  { type: "output", text: "components  app  lib" },
  { type: "blank" },
  { type: "output", text: "> Tool call: mcp_chrome-devtools_take_snapshot" },
  { type: "output", text: "> Tool call: mcp_cursor-ide-browser_browser_click" },
  { type: "blank" },
  { type: "prompt", text: "$ npm run build" },
  { type: "output", text: "Compiled successfully" },
  { type: "output", text: "Route (app)  Size" },
  { type: "blank" },
  { type: "prompt", text: "$ _" },
];

function TerminalLine({
  type,
  text,
}: {
  type: "prompt" | "output" | "blank";
  text?: string;
}) {
  if (type === "blank") {
    return <div className="h-5" />;
  }
  return (
    <div className="font-mono text-sm leading-relaxed">
      {type === "prompt" && (
        <span className="text-[var(--accent)] select-none">{text}</span>
      )}
      {type === "output" && (
        <span className="text-zinc-400 select-none">{text}</span>
      )}
    </div>
  );
}

const LINES_LOOP = [...LINES, ...LINES];

export function ScrollingTerminal() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.22]"
      aria-hidden
    >
      <style dangerouslySetInnerHTML={{ __html: scrollKeyframes }} />
      <div
        className="flex flex-col py-4 pl-16 pr-6"
        style={{
          width: "max-content",
          minWidth: "100%",
          animation: "scroll-terminal 25s linear infinite",
          willChange: "transform",
        }}
      >
        {LINES_LOOP.map((line, i) => (
          <TerminalLine
            key={i}
            type={line.type as "prompt" | "output" | "blank"}
            text={"text" in line ? line.text : undefined}
          />
        ))}
      </div>
    </div>
  );
}
