import { useUser } from "@/hooks/use-user";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const { user, logout } = useUser();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome, {user?.username}!</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <div className="grid gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-lg bg-card"
          >
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <p className="text-muted-foreground">
              This is your personalized dashboard.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
