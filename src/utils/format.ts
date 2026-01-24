import he from 'he';

export function decodeHtml(html: string): string {
    return he.decode(html);
}
