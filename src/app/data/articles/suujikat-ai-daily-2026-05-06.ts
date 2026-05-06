import type { BlogArticle } from "../blog";

export const suujikatAiDaily20260506: BlogArticle = {
  slug: "suujikat-ai-daily-2026-05-06",
  img: "/blog/suujikat-ai-daily-2026-05-06/openai-memory-sources.png",
  tag: "AI",
  title: "SuuJiKat AI Daily｜2026-05-06",
  excerpt: "过去 24 小时 AIGC 大事件：AI 正在争夺“工作现场”。",
  author: "SuuJiKat",
  avatar: "https://i.pravatar.cc/64?img=12",
  date: "2026-05-06",
  read: "8 min read",
  body: [
    { type: "paragraph", text: "过去 24 小时 AIGC 大事件，每天更新。" },
    {
      type: "paragraph",
      text: "今天这期最值得看的，不是某个模型单点变强，而是几个信号放在一起之后出现的方向：",
    },
    { type: "quote", text: "AI 正在争夺“工作现场”。" },
    { type: "heading", text: "今日目录" },
    {
      type: "list",
      items: [
        "OpenAI 发布 GPT-5.5 Instant，成为 ChatGPT 默认模型",
        "Anthropic 把 Claude 推进金融服务基础设施",
        "Unity AI Beta 上线：Agent、AI Gateway、官方 MCP Server",
        "TRAE SOLO 登陆移动端，手机也能发起复杂工作任务",
        "OpenAI AI 手机传闻升温：agent 可能需要系统入口",
        "黄仁勋回应 AI 失业焦虑：自动化任务，不等于替代整份工作",
        "今天的一个判断：AI 的下一个战场，不是聊天体验，而是谁能进入工作现场",
      ],
    },
    { type: "heading", text: "01｜OpenAI 发布 GPT-5.5 Instant，成为 ChatGPT 默认模型" },
    { type: "heading", level: 3, text: "发生了什么" },
    {
      type: "paragraph",
      text: "OpenAI 在 5 月 5 日发布 GPT-5.5 Instant，并将它设为 ChatGPT 的默认模型，取代此前的 GPT-5.3 Instant。",
    },
    { type: "paragraph", text: "这次更新主要围绕三个方向：" },
    {
      type: "list",
      items: [
        "准确性提升，尤其是医疗、法律、金融等高风险领域。",
        "回复风格更简洁，减少不必要的格式堆砌、表情和追问。",
        "个性化能力增强，Plus 和 Pro 用户可以让模型参考历史对话、上传文件和已连接的 Gmail 内容。",
      ],
    },
    {
      type: "paragraph",
      text: "同时，OpenAI 还上线了 Memory sources。当回答用到用户个人背景信息时，ChatGPT 会显示部分记忆来源，用户可以看到调用了哪些历史对话或保存记忆，并进行删除或修正。",
    },
    {
      type: "image",
      src: "/blog/suujikat-ai-daily-2026-05-06/openai-memory-sources.png",
      alt: "OpenAI Memory sources screenshot",
      caption: "OpenAI Memory sources",
    },
    { type: "heading", level: 3, text: "SuuJiKat 判断" },
    {
      type: "paragraph",
      text: "AI 个性化不是单纯“更懂你”，而是开始继承你的信息环境。以后使用 AI 的关键能力，可能不只是提问，而是维护自己的上下文：哪些信息该被记住，哪些旧判断该被删除，哪些来源必须保留。",
    },
    { type: "heading", level: 3, text: "来源" },
    {
      type: "list",
      items: [
        "OpenAI - GPT-5.5 Instant: https://openai.com/index/gpt-5-5-instant/",
        "OpenAI - Introducing GPT-5.5: https://openai.com/index/introducing-gpt-5-5/",
      ],
    },
    { type: "heading", text: "02｜Anthropic 把 Claude 推进金融服务基础设施" },
    { type: "heading", level: 3, text: "发生了什么" },
    {
      type: "paragraph",
      text: "Anthropic 在 5 月 5 日举办了面向金融服务行业的线上活动 The Briefing: Financial Services。",
    },
    {
      type: "paragraph",
      text: "它在活动页里说得很直接：大型银行和金融机构现在部署 Claude，已经不只是 pilot，而是 infrastructure。",
    },
    {
      type: "paragraph",
      text: "Claude for Financial Services 页面也强调，Claude 可以连接 S&P Global、Daloopa 和机构内部系统，用于尽调、研究、benchmarking、金融分析、建模、memo、pitch deck 和投资组合管理。",
    },
    { type: "heading", level: 3, text: "SuuJiKat 判断" },
    {
      type: "paragraph",
      text: "企业 AI 的本质，不是把一个聊天机器人塞进公司，而是把 AI 变成组织的一部分。当 AI 进入组织基础设施，真正稀缺的能力会变成：如何设计验证系统，如何保留来源，如何决定哪些判断不能交给模型。",
    },
    { type: "heading", level: 3, text: "来源" },
    {
      type: "list",
      items: [
        "Anthropic - The Briefing: Financial Services: https://www.anthropic.com/events/the-briefing-financial-services-virtual-event",
        "Anthropic - Claude for Financial Services: https://www.anthropic.com/solutions/financial-services",
      ],
    },
    { type: "heading", text: "03｜Unity AI Beta 上线：Agent、AI Gateway、官方 MCP Server" },
    { type: "heading", level: 3, text: "发生了什么" },
    { type: "paragraph", text: "Unity AI Beta 已经开放。官方页面列出的核心组件包括：" },
    {
      type: "list",
      items: [
        "Agentic Assistant：集成在 Unity Editor 中，理解项目上下文、场景、GameObject 和组件。",
        "AI Gateway：让开发者接入自己的第三方 AI 工具和模型。",
        "Unity MCP Server：允许开发者从 IDE 或其他应用连接并控制 Unity Editor。",
      ],
    },
    {
      type: "paragraph",
      text: "Unity 还强调，AI 生成内容可以回滚，生成资产可添加元数据标签，项目数据默认只用于提供服务，不用于训练模型。",
    },
    { type: "heading", level: 3, text: "SuuJiKat 判断" },
    {
      type: "paragraph",
      text: "创作工具的 AI 化，不是简单加一个聊天窗口。真正的变化是：AI 开始拥有操作环境的入口。未来很多行业都会出现类似结构：一个专业软件 + 一个理解上下文的 agent + 一套权限和回滚机制。",
    },
    { type: "heading", level: 3, text: "来源" },
    { type: "list", items: ["Unity AI: https://unity.com/features/ai"] },
    { type: "heading", text: "04｜TRAE SOLO 登陆移动端，手机也能发起复杂工作任务" },
    { type: "heading", level: 3, text: "发生了什么" },
    {
      type: "paragraph",
      text: "TRAE SOLO 的移动端 App 已经出现在 App Store，定位为 SOLO AI Work Assistant。",
    },
    {
      type: "paragraph",
      text: "从 App Store 信息看，它支持语音和文字输入，也支持通过扫码或命令与电脑配对，并进行文件夹级别授权。",
    },
    {
      type: "paragraph",
      text: "此前 TRAE 官方中文社区和 SOLO 挑战赛页面也把 SOLO 描述为一个面向真实工作任务的智能体，可以通过对话完成产品开发、数据分析、报告生成、PPT 制作、Web 应用开发等任务。",
    },
    { type: "heading", level: 3, text: "SuuJiKat 判断" },
    {
      type: "paragraph",
      text: "AI agent 的移动端化，真正改变的不是屏幕尺寸，而是工作节奏。以后很多任务会从“坐下开始做”，变成“随时发起，让系统继续跑”。但这也要求用户更会拆任务、更会设边界、更会检查结果。",
    },
    {
      type: "image",
      src: "/blog/suujikat-ai-daily-2026-05-06/trae-solo-mobile.png",
      alt: "TRAE SOLO mobile screenshot",
      caption: "TRAE SOLO mobile",
    },
    { type: "heading", level: 3, text: "来源" },
    {
      type: "list",
      items: [
        "App Store - TRAE SOLO AI Work Assistant: https://apps.apple.com/ag/app/trae-solo-ai-work-assistant/id6761401019",
        "TRAE SOLO 挑战赛页面: https://www.trae.cn/2026-solo-challenge",
        "TRAE SOLO 官方页: https://www.trae.ai/solo?showJoin=1",
      ],
    },
    { type: "heading", text: "05｜OpenAI AI 手机传闻升温：agent 可能需要系统入口" },
    { type: "heading", level: 3, text: "发生了什么" },
    { type: "paragraph", text: "围绕 OpenAI 手机的传闻继续发酵。" },
    {
      type: "paragraph",
      text: "多家媒体援引分析师郭明錤的供应链信息称，OpenAI 可能正在推进一款 AI-first 手机，并与联发科、高通、立讯精密等供应链伙伴合作。最新报道还提到，量产时间可能被提前到 2027 年上半年，芯片方向可能偏向为 AI agent 使用场景定制。",
    },
    { type: "paragraph", text: "这仍然是供应链爆料，不是 OpenAI 官方确认。" },
    {
      type: "image",
      src: "https://static.hub.91mobiles.com/wp-content/uploads/sites/9/2026/05/OpenAI-phone.001.jpeg?tr=q-70,w-415",
      alt: "OpenAI phone rumor image",
      caption: "OpenAI phone rumor image from 91mobiles",
    },
    { type: "heading", level: 3, text: "SuuJiKat 判断" },
    {
      type: "paragraph",
      text: "OpenAI 手机传闻的核心，不是“挑战 iPhone”，而是“AI 公司想不想拥有自己的入口”。如果 AI 的下一步是持续感知、跨应用执行、主动完成任务，那么手机就不只是硬件，而是 agent 的操作系统实验场。",
    },
    { type: "heading", level: 3, text: "来源" },
    {
      type: "list",
      items: [
        "91mobiles - OpenAI may fast-track first AI phone launch to 2027: https://www.91mobiles.com/hub/openai-fast-track-first-ai-phone-launch-2027-kuo/",
        "MacRumors - OpenAI Reportedly Working on an AI Smartphone: https://www.macrumors.com/2026/04/27/openai-working-on-an-ai-smartphone/",
        "TechRadar - OpenAI phone rumors: https://www.techradar.com/ai-platforms-assistants/gen-z-hate-ai-the-musk-vs-altman-trial-heats-up-openai-phone-rumors-buzz-and-more-of-the-weeks-most-surprising-developments",
      ],
    },
    { type: "heading", text: "06｜黄仁勋回应 AI 失业焦虑：自动化任务，不等于替代整份工作" },
    { type: "heading", level: 3, text: "发生了什么" },
    {
      type: "paragraph",
      text: "TechCrunch 报道，英伟达 CEO 黄仁勋在 Milken Institute 活动上表示，AI 正在创造大量就业机会，而不是简单制造大规模失业。",
    },
    { type: "paragraph", text: "他的核心说法是：自动化替代的是具体任务，不等于整个职位都会消失。" },
    {
      type: "paragraph",
      text: "他还反对“AI 将摧毁大量行业”的末日论叙事，认为这种恐惧会让公众不敢使用 AI。",
    },
    { type: "heading", level: 3, text: "SuuJiKat 判断" },
    {
      type: "paragraph",
      text: "“AI 会不会抢工作”这个问题太粗。更精确的问题是：哪些任务会被自动化，哪些任务会变得更重要，哪些训练路径需要重新设计。对个人来说，最现实的策略是尽快弄清楚：自己的工作里，哪些重复可以交给 AI，哪些判断必须自己保留。",
    },
    { type: "heading", level: 3, text: "来源" },
    {
      type: "list",
      items: [
        "TechCrunch - Nvidia's Jensen Huang says AI is creating jobs: https://techcrunch.com/2026/05/04/as-workers-worry-about-ai-nvidias-jensen-huang-says-ai-is-creating-an-enormous-number-of-jobs/",
      ],
    },
    { type: "heading", text: "今天的一个判断" },
    { type: "paragraph", text: "今天这些新闻可以归到同一个趋势里：" },
    { type: "quote", text: "AI 正在争夺“工作现场”。" },
    { type: "paragraph", text: "OpenAI 把默认模型和个性化记忆往前推，是在争夺个人入口。" },
    { type: "paragraph", text: "Anthropic 把 Claude 推进金融服务，是在争夺组织流程。" },
    { type: "paragraph", text: "Unity AI 和 TRAE SOLO，是在争夺创作者和开发者的工作台。" },
    { type: "paragraph", text: "OpenAI 手机传闻，则是在讨论 AI agent 是否需要自己的系统级入口。" },
    { type: "paragraph", text: "所以接下来值得看的不是“哪个模型分数更高”，而是：" },
    {
      type: "list",
      items: [
        "AI 能进入哪里？",
        "它能看见什么上下文？",
        "它能执行什么动作？",
        "它的权限边界在哪里？",
        "最后的判断由谁负责？",
      ],
    },
    { type: "heading", text: "今日可实践动作" },
    {
      type: "list",
      ordered: true,
      items: [
        "整理自己的 AI 使用上下文：哪些资料、历史对话、文件适合被 AI 长期记住。",
        "把一个重复任务拆成“输入、处理、验证、输出”四步，测试能不能做成 Harmony 工作流。",
        "试着给一条 AI 新闻补三层来源：官方事实、媒体背景、社区体感。",
      ],
    },
    { type: "heading", text: "明天继续盯" },
    {
      type: "list",
      items: [
        "OpenAI GPT-5.5 Instant 的 Memory sources 实际体验。",
        "Unity AI Beta 的 MCP Server 和权限机制。",
        "TRAE SOLO 移动端是否真正能稳定远程推进电脑任务。",
        "OpenAI 手机传闻是否有更接近官方或供应链的一手信息。",
        "AI 就业争论：Amodei 的风险预警和黄仁勋的乐观判断，哪个更接近现实。",
      ],
    },
  ],
};
