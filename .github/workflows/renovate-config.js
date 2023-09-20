{
  // "branchPrefix": "KubeArchitect/",
  "dryRun": "full",
  "username": "KubeArchitectBot",
  "gitAuthor": "KubeArchitect-Bot <kubearchitect-bot@ghostinbox.io>",
  "onboarding": true,
  "platform": "github",
  "includeForks": true,
  "repositories": [
    "KubeArchitect/renovate-runner",
    "KubeArchitect/hetzner-k3s",
    "KubeArchitect/hetzner-flux",
    "KubeArchitect/terraform-config-github",
  ],
  "packageRules": [
    {
      "description": "lockFileMaintenance",
      "matchUpdateTypes": [
        "pin",
        "digest",
        "patch",
        "minor",
        "major",
        "lockFileMaintenance"
      ],
      "dependencyDashboardApproval": false,
      "stabilityDays": 0
    }
  ]
}
