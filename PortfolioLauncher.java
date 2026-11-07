import java.awt.Desktop;
import java.io.File;

/**
 * Amara Sumi D. Erorita — Portfolio Launcher
 * Keep this file in the same folder as index.html and the assets folder.
 */
public class PortfolioLauncher {
    public static void main(String[] args) {
        File homepage = new File("index.html").getAbsoluteFile();
        if (!homepage.exists()) {
            System.out.println("index.html was not found. Keep the launcher beside the portfolio files.");
            return;
        }
        if (!Desktop.isDesktopSupported()) {
            System.out.println("Open index.html manually in your browser: " + homepage.getAbsolutePath());
            return;
        }
        try {
            Desktop.getDesktop().browse(homepage.toURI());
            System.out.println("Opening Amara's portfolio...");
        } catch (Exception error) {
            System.out.println("Could not open the portfolio: " + error.getMessage());
        }
    }
}
