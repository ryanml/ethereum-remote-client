const execSync = require('child_process').execSync

// Yarn audit status codes:
//
// Only moderate warnings and above should be taken in to consideration
//
// 1 - INFO
// 2 - LOW
// 4 - MODERATE
// 8 - HIGH
// 16 - CRITICAL

try {
  return execSync('yarn audit')
} catch (e) {
  if (e.status < 4) {
    return process.exit(0)
  }
  throw new Error('Moderate or higher vulnerabilities found during yarn audit')
}
