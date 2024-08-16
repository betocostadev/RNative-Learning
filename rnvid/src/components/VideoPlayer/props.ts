export interface VideoPlayerProps {
  video: { uri: string }
  onShare: () => void
  onSave: () => void
  onDelete: () => void
}
