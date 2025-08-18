function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center py-5 border-t border-t-indigo-500/10">
      <small lang="en">
        Copyright all Reserved. &copy; {currentYear}
      </small>
    </footer>
  )
}
export default Footer