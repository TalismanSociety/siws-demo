import { useCallback, useState } from "react"
import { useToast } from "../components/ui/use-toast"

export const useProtectedService = () => {
  const [randomText, setRandomText] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const generate = useCallback(
    async (jwtToken?: string) => {
      setLoading(true)
      try {
        const res = await fetch("/api/protected", {
          headers: {
            Authorisation: `Bearer ${jwtToken}`,
          },
        })
        const data = await res.json()
        if (data.error) throw new Error(data.error)
        setRandomText(data.randomText)
      } catch (e: any) {
        toast({
          title: "Failed to generate random text",
          description: e.message,
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    },
    [toast]
  )

  return { generate, randomText, loading }
}
