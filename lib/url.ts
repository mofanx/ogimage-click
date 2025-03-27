export function absoluteUrl(path: string) {
  // 如果路径已经是绝对路径，直接返回
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // 如果是在浏览器环境中，使用当前窗口的主机名
  if (typeof window !== "undefined") {
    const absoluteUrl = new URL(path.startsWith('/') ? path : `/${path}`, window.location.origin);
    return absoluteUrl.toString();
  }

  // 在服务器端渲染时，使用环境变量中的 BASE_URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (baseUrl) {
    const absoluteUrl = new URL(path, baseUrl);
    return absoluteUrl.toString();
  }

  // 如果没有设置 BASE_URL，则返回相对路径
  if (path.startsWith('/')) {
    return path;
  } else {
    return `/${path}`;
  }
}
