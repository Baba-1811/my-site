export default function DownloadButton(props: { filename: string; label?: string }) {
  return (
    <a href={'/downloads/' + props.filename} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition">
      {props.label ? props.label : props.filename}
    </a>
  )
}