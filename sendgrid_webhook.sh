function localtunnel {
  lt -s https://fwegmetimbers.localtunnel.me --port 6000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
